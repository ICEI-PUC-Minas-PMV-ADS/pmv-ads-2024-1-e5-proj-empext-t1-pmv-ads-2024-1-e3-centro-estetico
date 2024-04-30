import { ContactRound, MoveRight } from 'lucide-react';

import { Button } from "@/components/ui/button"
import { useNavigate } from 'react-router-dom';
import { useTitle } from '@/hooks/useTitle';


type ButtonWithIconProps = {
  title: string,
  path: string
}

export function ButtonWithIcon(props:ButtonWithIconProps) {

  const navigate = useNavigate()
  const { setTitle } = useTitle();

  const navigateUpdatingHeader = (path: string, title: string) => {
    setTitle(title)
    navigate(path)
  }

  return (
    <Button onClick={() => {navigateUpdatingHeader(props.path, props.title)}} variant='forms' className='justify-between'>
      <ContactRound className="mr-2 h-4 w-4 " /> <h1 className='text-wwhite'>{props.title}</h1> <MoveRight className='mr-2 h-4 w-4' />
    </Button>
  )
}
