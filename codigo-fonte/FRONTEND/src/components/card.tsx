// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck

import { useTitle } from '@/hooks/useTitle';
import { Phone } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

type cardProps = {
  name: string
  id: string
  phone: string
}

export function Card(props: cardProps) {
  const navigate = useNavigate()
  const { setTitle } = useTitle()

  const navigateUpdatingHeader = (path: string, title: string) => {
    setTitle(title)
    navigate(path)
  }

  return (
    <div
      className="flex h-20 w-full rounded-lg border-gray-200 border-opacity-90 bg-input"
      onClick={() =>
        navigateUpdatingHeader(`/perfil-users/${props.id}`, props.name)
      }
    >
      <img
        src="https://cdn-icons-png.flaticon.com/512/6326/6326055.png"
        alt="foto"
        className="m-3 h-14 w-1/8 rounded-lg "
      />
      <span className="flex flex-col gap-2">
        <h2 className="ml-1 pt-4 text-base font-medium text-primary">
          {props.name}
        </h2>
        <h3 className="ml-1 text-sm font-medium flex text-center items-center"><Phone className='text-primary pr-1 mr-1' />{props.phone}</h3>
      </span>
    </div>
  )
}
