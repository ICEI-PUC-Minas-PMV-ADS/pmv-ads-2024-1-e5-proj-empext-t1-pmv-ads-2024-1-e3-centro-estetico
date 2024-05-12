import { Button } from '@/components/ui/button'
import { ReactSVG } from 'react-svg';
import { Input } from "@/components/ui/input"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Helmet } from 'react-helmet-async'
import { Search } from 'lucide-react';
import { Card } from '@/components/card';

import newTreatment from '../../assets/newTreatment.svg'
import newClient from '../../assets/newClient.svg'
import newForm from '../../assets/newForm.svg'
import { useState, ChangeEvent } from 'react';
import axios from 'axios';
import { env } from '../../env'
import { useNavigate } from 'react-router-dom';
import { useTitle } from '@/hooks/useTitle';
import { TitleOfPages } from '@/utils/titleOfPages';


export function Homepage() {
  type user = {
    id: number,
    name: string
  }

  const [name, setName] = useState<string>('')
  const [users, setUsers] = useState<user[]>([])
  const [hasUsers, setHasUsers] = useState<boolean>(false)
  const [message, setMessage] = useState<string>('Nenhuma busca realizada')
  const { setTitle } = useTitle();

  const navigate = useNavigate()

  const SearchingUsers = (e: ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value)
  }

  const handleSearchUsers = async () => {
    try {
      if(name !== '') {
        const response = await axios.get(`${env.VITE_API_URL}/clients?name=${name}`);
        setUsers(response.data)
        setHasUsers(true)
      }
    } catch (error: any) {
      console.error('Erro ao buscar os usuários', error);
      if(error.response.status === 404) {
        setUsers([])
        setMessage('Cliente não encontrado')
        setHasUsers(false)
      }
    }
  };

  const navigateUpdatingHeader = (path: string, title: string) => {
    setTitle(title)
    navigate(path)
  }

  return (
    <div className='justify-center flex flex-col'>
      <Helmet title="Homepage" />
      <div className="flex justify-around w-full">

        <Button asChild variant="ghost" className="size-2/5 p-0" onClick={() => navigateUpdatingHeader('/appointment', TitleOfPages.appointment)}>
          <ReactSVG src={newTreatment} />
        </Button>

        <Button asChild variant="ghost" className="size-2/5 p-0" onClick={() => navigateUpdatingHeader('/register-users', TitleOfPages.newClient)}>
          <ReactSVG src={newClient} />
        </Button>

      </div>

      <Button asChild variant="ghost" className="size-5/5 p-0 pt-4 self-center" onClick={() => navigateUpdatingHeader('/notifications', TitleOfPages.notifications)}>
        <ReactSVG src={newForm} />
      </Button>


      <h1 className="font-semibold ml-1 pt-5 pb-3 text-lg">Buscar cliente</h1>
      <div className='flex ml-1 mr-1 gap-3'>
        <Input
          type="text"
          placeholder="Pesquisar"
          className=' border-gray-200 border-opacity-90 bg-input'
          onChange={SearchingUsers}
        />
        <Button variant="default" className='size-auto' onClick={handleSearchUsers}>
          <Search />
        </Button>
      </div>

      <div className="flex flex-col gap-5 pt-5 ml-1 mr-1">

        {
          hasUsers ? users.map((e: user) => (
            <Card
              key={e.id}
              name={e.name}
              id={e.id}
            />
          )) : <Alert variant='default'>
            <AlertDescription>
              {message}
            </AlertDescription>
          </Alert>
        }

      </div>

    </div>

  )
}
