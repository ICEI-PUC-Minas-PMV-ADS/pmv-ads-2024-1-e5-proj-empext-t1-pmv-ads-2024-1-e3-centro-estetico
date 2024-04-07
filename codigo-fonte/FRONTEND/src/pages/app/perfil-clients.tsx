import { Button } from '@/components/ui/button'
import { ButtonWithIcon } from '@/components/button-with-icon'

import { Home, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';
import { ReactSVG } from 'react-svg';

import imgPerson from '../../assets/imgPerson.svg'
import newTreatment from '../../assets/newTreatment.svg'


export function PerfilClients() {
  return (
    <div className='justify-center flex flex-col'>
      <Link to="/">
        <Home />
      </Link>
    <div/>
    <div className='flex justify-around align-space-around pt-7'>
        <div>
            <ReactSVG src={imgPerson}/>
        </div>
        <div className='flex flex-col justify-around'>
            <div className='flex justify-between'>
                <Button variant={'telephone'} size={'icon'}>
                <Phone />
                </Button>
                <p className='font-medium pt-2 pl-2'>(82) 9999-9999</p>
            </div>
            <Button>
                <p>Histórico do cliente</p>
            </Button>
        </div>

    </div>
    <div className='flex justify-between pt-8'>
        <Button variant={'alertgreen'}>
            <p>Não é oncológico</p>
        </Button>
        <Button variant={'alertred'}>
            <p>É diabético</p>
        </Button>
        <Button variant={'alertred'}>
            <p>É cardíaco</p>
        </Button>
    </div>

    <h1 className='text-lg font-semibold pl-3 pt-11 pb-7'>Fichas de Anamnese</h1>

    <div className='flex flex-col gap-5'>
        <ButtonWithIcon title='Questionário de saúde' />
        <ButtonWithIcon title='Ficha facial' />
        <ButtonWithIcon title='Últimas medidas corporais' />
    </div>

    <div className='pt-20 self-center'>
        <Button asChild variant="ghost" className="p-0">
            <ReactSVG src={newTreatment}/>
        </Button>
    </div>


    </div>
    
  )
}
