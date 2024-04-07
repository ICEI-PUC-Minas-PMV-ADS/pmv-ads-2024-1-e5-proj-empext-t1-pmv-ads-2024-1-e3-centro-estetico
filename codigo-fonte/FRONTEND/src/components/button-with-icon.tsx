import { ContactRound, MoveRight } from 'lucide-react';

import { Button } from "@/components/ui/button"


type ButtonWithIconProps = {
  title: string
}

export function ButtonWithIcon(props:ButtonWithIconProps) {
  return (
    <Button variant='forms' className='justify-between'>
      <ContactRound className="mr-2 h-4 w-4 " /> <h1 className='text-wwhite'>{props.title}</h1> <MoveRight className='mr-2 h-4 w-4' />
    </Button>
  )
}
