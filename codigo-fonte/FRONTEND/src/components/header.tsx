import { AccountMenu } from './account-menu'
import { ArrowLeft } from 'lucide-react';
import { HeaderMenu } from './menu';
import { useTitle } from '@/hooks/useTitle';
import { useNavigate } from 'react-router-dom';
import { useMemo, useState } from 'react';
import { useUserLoggedData } from '@/hooks/useUserLogged';


type User = {
  name: string;
};


type HeaderProps = {
  page: string
}

export function Header(props: HeaderProps) {
  const [userData, setUserData] = useState<User | null>(null);
  const [nonLoggedSession, setNonLoggedSession] = useState(false)
  const { userLoggedData } = useUserLoggedData();

  let isHomepage = false
  if (props.page === "Home") {
    isHomepage = true
  }

  const { setTitle, previousPath, previousTitle } = useTitle();
  const navigate = useNavigate()

  useMemo(() => {
    if (isHomepage === true && userData === null && (window.location.pathname.includes('/perfil-users/'))) {
      setNonLoggedSession(true)
    }

    async function cookieValidation() {
      if ((await userLoggedData).id === '') {
        if (!window.location.pathname.includes('/perfil-users')) {
          navigate('/sign-in')
        }
      } else {
        setUserData(await userLoggedData)
      }
    }

    cookieValidation()
    
  }, []);

  function navigatePreviousPage() {

    if (previousPath === window.location.pathname) {
      setTitle('Home')
      navigate('/')
    } else {
      setTitle(previousTitle)
      navigate(previousPath)
    }
  }


  return (
    <>
      {nonLoggedSession ? <></> : <>
        {
          isHomepage ? (
            <div className="flex h-16 items-center gap-6 pt-10 pb-6 px-5 justify-between">
              <HeaderMenu />
              <nav className="flex flex-col items-center font-bold text-blue-600 justify-self-center text-lg">
                <span>Bem vindo(a),</span>
                <span>{userData ? userData.name : 'Carregando'}</span>
              </nav>
              <AccountMenu />
            </div>) : (<div className="flex h-16 items-center px-5 justify-between bg-input font-semibold text-xl rounded-b-lg">
              <ArrowLeft onClick={() => navigatePreviousPage()} />
              <h2>{props.page}</h2>
              <div></div>
            </div>)
        }
      </>}
    </>
  )
}
