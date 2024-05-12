"use client"

import * as React from "react"
import { Check, ChevronDown } from "lucide-react"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "@/components/ui/command"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"

interface OptionType {
  name: string,
  id: string
}

interface ComboboxProps {
  options: OptionType[],
  title: string,
  needSearch: boolean,
  selectFunction: React.Dispatch<React.SetStateAction<string | undefined>>
  searchBoxPlaceholder?: string
}


export function ComboboxDemo(props: ComboboxProps) {
  const [open, setOpen] = React.useState(false)
  const [value, setValue] = React.useState("")

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <Label>{props.title}</Label>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-full flex justify-between bg-input text-primary text-base font-normal"
        >
          {value
            ? props.options.find((option) => option.name === value)?.name
            : `Selecione um ${props.title.toLowerCase()}`}
          <ChevronDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[250px] p-0" >
        <Command>
          {
            props.needSearch ? <>
              <CommandInput placeholder={props.searchBoxPlaceholder} />
              <CommandEmpty>Cliente não encontrado</CommandEmpty>
            </> : <></>
          }

          <CommandGroup>
            {props.options.map((option) => (
              <CommandItem
                key={option.name}
                value={option.name}
                onSelect={() => {
                  setValue(option.name)
                  setOpen(false)
                  props.selectFunction(option.id)
                }}
              >
                <Check
                  className={cn(
                    "mr-2 h-4 w-4",
                    value === option.name ? "opacity-100" : "opacity-0"
                  )}
                />
                {option.name}
              </CommandItem>
            ))}
          </CommandGroup>
        </Command>
      </PopoverContent>
      <span className="border-b border-gray-200"></span>
    </Popover>
  )
}
