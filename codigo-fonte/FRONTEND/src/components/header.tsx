import { AccountMenu } from './account-menu'
import { XIcon } from 'lucide-react';
import { HeaderMenu } from './menu';
import { useTitle } from '@/hooks/useTitle';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useEmail } from '@/hooks/useEmail';
import axios from 'axios';
import { env } from '@/env';

type User = {
  name: string;
};


type HeaderProps = {
  page: string
}

export function Header(props: HeaderProps) {
  const [userData, setUserData] = useState<User | null>(null);
  const { email } = useEmail();

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

  useEffect(() => {

    if(email === '') {
      if(!window.location.pathname.includes('/perfil-users')) {
        navigate('/sign-in')
      }
    }

    async function fetchEstheticianUser() {
        try {
            const response = await axios.get(`${env.VITE_API_URL}/get-estheticians?user_email=${email}`);
            const data = response.data;
            setUserData(data);
        } catch (error) {
            console.error('Failed to fetch esthetician data:', error);
        }
    }
    fetchEstheticianUser();
}, []);


  return (
    <>
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
            <XIcon onClick={() => navigateUpdatingHeader('/', 'Home')} />
            <h2>{props.page}</h2>
            <div></div>
          </div>)
      }

    </>
  )
}
