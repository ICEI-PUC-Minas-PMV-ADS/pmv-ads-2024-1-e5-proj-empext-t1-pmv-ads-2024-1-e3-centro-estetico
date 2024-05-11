import { Button } from '@/components/ui/button'
import { ButtonWithIcon } from '@/components/button-with-icon'

import { Phone } from 'lucide-react';
import { ReactSVG } from 'react-svg';

import imgPerson from '../../assets/imgPerson.svg'
import newTreatment from '../../assets/newTreatment.svg'
import { useUser } from '@/context/UserContext';
import { useParams } from 'react-router-dom';
// import { ChangeEvent, useState } from 'react';


export function PerfilClients() {

    // const [selectedImage, setSelectedImage] = useState<File | null>(null);

    // const handleImageChange = (event: ChangeEvent<HTMLInputElement>) => {
    //     const file = event.target.files?.[0]; 
    
    //     if (file) {
    //         setSelectedImage(file); 
    //     } else {
    //         setSelectedImage(null); 
    //     }
    // };

    const {users} = useUser();
    const { id } = useParams();
    // console.log(users?.find((item) => item.id === id)?.phone)

    return (
        <div className='justify-center flex flex-col'>
            <div className='flex justify-around align-space-around pt-7'>
                <div>
                    <ReactSVG src={imgPerson} />
                </div>
            {/* {selectedImage ? (
                <img src={URL.createObjectURL(selectedImage)} alt="Uploaded" />
            ) : null}
            <input type="file" accept="image/*" onChange={handleImageChange} /> */}
                <div className='flex flex-col justify-around'>
                    <div className='flex justify-between'>
                        <Button variant={'telephone'} size={'icon'}>
                            <Phone />
                        </Button>
                        <p className='font-medium pt-2 pl-2'>{users?.find((item) => item.id === id)?.phone}</p>
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
                <ButtonWithIcon path={`/perfil-users/${id}/questionary`} title='Questionário de saúde' />
                <ButtonWithIcon path='/' title='Ficha facial' />
                <ButtonWithIcon path='/' title='Últimas medidas corporais' />
            </div>

            <div className='pt-20 self-center'>
                <Button asChild variant="ghost" className="p-0">
                    <ReactSVG src={newTreatment} />
                </Button>
            </div>


        </div>

    )
}


// criar um navigate