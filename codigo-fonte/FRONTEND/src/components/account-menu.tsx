import { LogOutIcon, UserCircle2Icon } from 'lucide-react'
import { ThemeToggle } from './theme/theme-toggle'
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar"

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from './ui/dropdown-menu'

export function AccountMenu() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>FS</AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-18">
        <DropdownMenuLabel className="flex">
          <div className="flex flex-col">
            <span>João Ramires</span>
            <span className="text-xs font-normal text-muted-foreground">
              joao@email.com
            </span>
          </div>
          <DropdownMenuItem className='pl-5'>
            <ThemeToggle /> 
          </DropdownMenuItem>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
            <UserCircle2Icon className="mr-2 h-4 w-4" />
            <span>Perfil</span>
        </DropdownMenuItem>
        <DropdownMenuItem className="text-rose-500 dark:text-rose-400">
          <LogOutIcon className="mr-2 h-4 w-4" />
          <span>Sair</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}