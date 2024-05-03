"use client"

import * as React from "react"
import { useEffect } from 'react';
import { format } from "date-fns"
import { Calendar as CalendarIcon } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { ptBR } from "date-fns/locale/pt-BR"

interface DateProps {
  selectDate: React.Dispatch<React.SetStateAction<Date | undefined>>
}

export function DatePickerDemo(props: DateProps) {
  const [date, setDate] = React.useState<Date>()

  useEffect(() => {
    if (date) {
      props.selectDate(date)
    }
  }, [date, setDate])

  return (
    <Popover>
      <PopoverTrigger asChild className="border-b border-gray-200 outline-none text-primary">
        <Button
          variant={"outline"}
          className={cn(
            "w-full justify-start text-left font-normal",
            !date && "bg-input"
          )}
        >
          <CalendarIcon className="mr-2 h-4 w-4" />
          {date ? format(date, "PPP", { locale: ptBR }) : <span>Escolha uma data</span>}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0">
        <Calendar
          mode="single"
          selected={date}
          onSelect={setDate}
          initialFocus
          locale={ptBR}
        />
      </PopoverContent>
    </Popover>
  )
}
