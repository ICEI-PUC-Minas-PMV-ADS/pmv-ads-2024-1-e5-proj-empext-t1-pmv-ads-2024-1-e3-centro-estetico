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
import { useTitle } from '@/hooks/useTitle';
import { useNavigate, useParams } from 'react-router-dom';
import { TitleOfPages } from '@/utils/titleOfPages';

export function AccountMenu() {
  const { setTitle } = useTitle();
  const navigate = useNavigate();
  const { id } = useParams();

  const navigateUpdatingHeader = (path: string, title: string) => {
    setTitle(title)
    navigate(path)
  }

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
        <DropdownMenuItem onClick={()=>{navigateUpdatingHeader(`/perfil/${id}`, TitleOfPages.perfil )}}>
            <UserCircle2Icon className="mr-2 h-4 w-4" />
            <span>Perfil</span>
        </DropdownMenuItem>
        <DropdownMenuItem className="text-rose-500 dark:text-rose-400" onClick={() => {navigateUpdatingHeader("/sign-in", TitleOfPages.home )}}>
          <LogOutIcon className="mr-2 h-4 w-4" />
          <span>Sair</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}