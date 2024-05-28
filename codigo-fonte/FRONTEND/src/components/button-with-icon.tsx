// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck

import { ContactRound, MoveRight } from 'lucide-react'

import { Button } from '@/components/ui/button'

type ButtonWithIconProps = {
  title: string
  path?: string
  onClick?: () => void
}

export function ButtonWithIcon(props: ButtonWithIconProps) {
  return (
    <Button variant="forms" className="justify-between" onClick={props.onClick}>
      <ContactRound className="mr-2 h-4 w-4 " />{' '}
      <h1 className="text-wwhite">{props.title}</h1>{' '}
      <MoveRight className="mr-2 h-4 w-4" />
    </Button>
  )
}
