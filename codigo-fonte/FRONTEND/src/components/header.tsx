import { AccountMenu } from './account-menu'
import { XIcon } from 'lucide-react';
import { HeaderMenu } from './menu';
import { useTitle } from '@/hooks/useTitle';
import { useNavigate } from 'react-router-dom';

type HeaderProps = {
  page: string
}

export function Header(props: HeaderProps) {
  let isHomepage = false
  if (props.page === "Home") {
    isHomepage = true
  }

  const { setTitle } = useTitle();
  const navigate = useNavigate()

  const navigateUpdatingHeader = (path: string, title: string) => {
    setTitle(title)
    navigate(path)
  }


  return (
    <>
      {
        isHomepage ? (
          <div className="flex h-16 items-center gap-6 pt-10 pb-6 px-5 justify-between">
            <HeaderMenu />
            <nav className="flex flex-col items-center font-bold text-blue-600 justify-self-center text-lg">
              <span>Bem vinda,</span>
              <span>Fátima</span>
            </nav>
            <AccountMenu />
          </div>) : (<div className="flex h-16 items-center px-5 justify-between bg-input font-semibold text-xl rounded-b-lg">
            <XIcon onClick={() => navigateUpdatingHeader('/', 'Home')} />
            <h2>{props.page}</h2>
            <div></div>
          </div>)
      }

    </>
  )
}
