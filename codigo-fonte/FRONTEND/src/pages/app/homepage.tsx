import { Card } from '@/components/card';
import { Button } from '@/components/ui/button';
import { Input } from "@/components/ui/input";
import { Search } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import { ReactSVG } from 'react-svg';

import { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import newClient from '../../assets/newClient.svg';
import newForm from '../../assets/newForm.svg';
import newTreatment from '../../assets/newTreatment.svg';


export function Homepage() {

  const navigate = useNavigate();

const redirectToRegister = useCallback(()=> {
  navigate('/register-users')}, [navigate])

  return (
    <div className='justify-center flex flex-col'>
      <Helmet title="Homepage" />
      <div className="flex justify-around w-full">

        <Button asChild variant="ghost" className="size-2/5 p-0">
          <ReactSVG src={newTreatment}/>
        </Button>

        <Button asChild variant="ghost" className="size-2/5 p-0" onClick={redirectToRegister}>
          <ReactSVG src={newClient}/>
        </Button>

      </div>

      <Button asChild variant="ghost" className="size-5/5 p-0 pt-4 self-center">
        <ReactSVG src={newForm} />
      </Button>


      <h1 className="font-semibold ml-1 pt-5 pb-3 text-lg">Buscar cliente</h1>
      <div className='flex ml-1 mr-1 gap-3'>
        <Input type="text" placeholder="Pesquisar" className=' border-gray-200 border-opacity-90 bg-input' />
        <Button variant="default" className='size-auto'>
          <Search />
        </Button>
      </div>

      <div className="flex flex-col gap-5 pt-5 ml-1 mr-1">

        <Card />

        <Card />

      </div>

    </div>


  )
}
