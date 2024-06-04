
import { useUser } from '@/context/UserContext';
// import { ChangeEvent, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import imgPerson from '../../assets/imgPerson.svg';
import newTreatment from '../../assets/newTreatment.svg';

import { ButtonWithIcon } from "@/components/button-with-icon";
import { Button } from "@/components/ui/button";

import { Phone } from "lucide-react";
import { ReactSVG } from "react-svg";


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

    // const { clientId } = useParams();
    const navigate = useNavigate();


    return (
        <div className="flex flex-col justify-center">
            <div className="align-space-around flex justify-around pt-7">
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
                </div>
                <div className="flex flex-col justify-around">
                    <Button onClick={() => navigate('/apportionments-list/${id}')}>
                        <p>Histórico do cliente</p>
                    </Button>
                </div>
            </div>
            <div className="flex justify-between pt-8">
                <Button variant={"alertgreen"}>
                    <p>Não é oncológico</p>
                </Button>
                <Button variant={"alertred"}>
                    <p>É diabético</p>
                </Button>
                <Button variant={"alertred"}>
                    <p>É cardíaco</p>
                </Button>
            </div>

            <h1 className="pb-7 pl-3 pt-11 text-lg font-semibold">
                Fichas de Anamnese
            </h1>

            <div className='flex flex-col gap-5'>
                <ButtonWithIcon path={`/perfil-users/${id}/questionary`} title='Questionário de saúde' />
                <ButtonWithIcon title='Ficha facial' onClick={() => navigate(`/facial-form/${id}`)}  />
                <ButtonWithIcon title='Últimas medidas corporais' />

            </div>

            <div className="self-center pt-20">
                <Button asChild variant="ghost" className="p-0">
                    <ReactSVG src={newTreatment} />
                </Button>
            </div>
        </div>
    )
}