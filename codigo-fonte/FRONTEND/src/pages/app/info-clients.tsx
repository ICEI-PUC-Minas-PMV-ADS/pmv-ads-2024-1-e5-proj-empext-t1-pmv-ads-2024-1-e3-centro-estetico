import { ReactSVG } from 'react-svg';
import imgPerson from '../../assets/imgPerson.svg';
import { useUser } from '@/context/UserContext';
import { useParams } from 'react-router-dom';
import telephone from "../../assets/telephone.svg";
import email from "../../assets/email.svg";
import address from "../../assets/address.svg";
import gender from "../../assets/gender.svg";
import birthday from "../../assets/birthday.svg";
import { Button } from '../../components/ui/button';

export function PatientInfo() {

    const { users } = useUser();
    const { id } = useParams();
    const user = users?.find((item) => item.id === id);

    
    return (
        <div className='container'>
            <h1 className="pt-1 pb-6 text-black-800 text-3xl flex justify-center font-Roboto Font Family">
                {user?.name || 'Nome não disponível'}
            </h1>
            <div className="justify-center flex ">
                <ReactSVG src={imgPerson} />
            </div>
            <div className="grid justify-center m-8">
                <div className="flex pb-2">
                    <ReactSVG src={telephone} />
                    <p className="font-medium ml-2 mt-3">{user?.phone || 'Telefone não disponível'}</p>
                </div>
                <div className="flex">
                    <ReactSVG src={gender} />
                    <p className="font-medium mt-4">{user?.gender || 'Gênero não disponível'}</p>
                </div>
                <div className="flex">
                    <ReactSVG src={birthday} />
                    <p className="font-medium mt-4">
                        {user?.birth_date ? user.birth_date.slice(0, 10) : 'Data de nascimento não disponível'}
                    </p>
                </div>
                <div className="flex pb-2">
                    <ReactSVG src={email} />
                    <p className="font-medium ml-2 mt-3">{user?.email || 'Email não disponível'}</p>
                </div>
                <div className="flex pb-2">
                    <ReactSVG src={address} />
                    <p className="font-medium ml-3 mt-3">{user?.address || 'Endereço não disponível'}</p>
                </div>
            </div>
            <div className='flex justify-center'>
                <Button>Editar</Button>
            </div>
        </div>
    );
}



