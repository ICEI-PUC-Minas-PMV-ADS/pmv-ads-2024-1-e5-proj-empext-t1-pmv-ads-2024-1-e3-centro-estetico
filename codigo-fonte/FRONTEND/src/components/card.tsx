// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck

import { useNavigate } from 'react-router-dom'

import { useTitle } from '@/hooks/useTitle'

type cardProps = {
  name: string
  id: string
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
        src="https://observatoriodosfamosos.uol.com.br/portal/wp-content/uploads/2023/08/manoel-gomes-70-mil-transformacao.jpg"
        alt="foto"
        className="m-3 h-14 w-1/4 rounded-lg "
      />
      <span className="flex flex-col gap-2">
        <h2 className="ml-1 pt-4 text-base font-medium text-primary">
          {props.name}
        </h2>
        <h3 className="ml-1 text-xs font-medium">Última consulta 22/12/2023</h3>
      </span>
    </div>
  )
}
