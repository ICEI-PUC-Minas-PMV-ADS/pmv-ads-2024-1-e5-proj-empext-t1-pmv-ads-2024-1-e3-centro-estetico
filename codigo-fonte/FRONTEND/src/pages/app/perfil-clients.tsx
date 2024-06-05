import { ButtonWithIcon } from '@/components/button-with-icon';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { useUser } from '@/context/UserContext';
import { useTitle } from '@/hooks/useTitle';
import { TitleOfPages } from '@/utils/titleOfPages';
import axios from 'axios';
import { Info, Phone } from 'lucide-react';
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { ReactSVG } from 'react-svg';
import imgPerson from '../../assets/imgPerson.svg';
import newTreatment from '../../assets/newTreatment.svg';
import { env } from '../../env';

export function PerfilClients() {
    const { users } = useUser();
    const { id } = useParams();
    const navigate = useNavigate();
    const { setTitle } = useTitle();

    const user = users?.find((item) => item.id === id);

    const [healthQuestionnaire, setHealthQuestionnaire] = useState(null);
    const [loading, setLoading] = useState(true);
    const [showPopup, setShowPopup] = useState(false);

    const navigateUpdatingHeader = (path: string, title: string) => {
        setTitle(title);
        navigate(path);
    };

    useEffect(() => {
        async function fetchHealthQuestionnaire() {
            try {
                const response = await axios.get(`${env.VITE_API_URL}/healthQuestionnaireByClientId?client_id=${id}`);


                const data = await response.data;
                setHealthQuestionnaire(data);
            } catch (error) {
                throw new Error(`Failed to fetch health questionnaire: ${error}`);
            } finally {
                setLoading(false);
            }
        }

         fetchHealthQuestionnaire();

    }, [id]);

    const handleHealthQuestionnaireClick = () => {
        if (healthQuestionnaire) {
            navigate(`/perfil-users/${id}/view-questionnaire`);
        } else {
            setShowPopup(true);
        }
    };

    const closePopup = () => {
        setShowPopup(false);
    };

    if (loading) {
        return <p>Loading...</p>;
    }

    if (error) {
        return <p>Error: {error}</p>;
    }

    return (
        <div className="flex flex-col justify-center">
            <div className='flex justify-end'>
                <Button variant={'ghost'} size={'xs'} onClick={() => navigateUpdatingHeader(`/perfil-users/${id}/info-client`, TitleOfPages.infoClient)}>
                    <Info />
                </Button>
            </div>
            <div className="align-space-around flex justify-around">
                <div>
                    <ReactSVG src={imgPerson} />
                </div>
                <div className='flex flex-col justify-around'>
                    <div className='flex justify-between'>
                        <Button variant={'telephone'} size={'icon'}>
                            <Phone />
                        </Button>
                        <p className='font-semibold pt-2 pl-2'>{user?.phone}</p>
                    </div>
                    <div className="flex flex-col justify-around">
                        <Button>
                            <p>Histórico do cliente</p>
                        </Button>
                    </div>
                </div>
            </div>
            <h1 className="pl-3 pt-6 text-lg font-semibold">
                Condições de Saúde
            </h1>
            <div className="flex justify-evenly pt-4">
                {healthQuestionnaire?.oncological_history && (
                    <Badge variant="alertred">
                        <p>É oncológico</p>
                    </Badge>
                )}
                {healthQuestionnaire?.diabetes && (
                    <Badge variant="alertred">
                        <p>É diabético</p>
                    </Badge>
                )}
                {healthQuestionnaire?.cardiac_issues && (
                    <Badge variant="alertred">
                        <p>É cardíaco</p>
                    </Badge>
                )}
            </div>

            <h1 className="pb-4 pl-3 pt-6 text-lg font-semibold">
                Fichas de Anamnese
            </h1>
            <div className='flex flex-col gap-5'>
                <ButtonWithIcon title='Questionário de saúde' onClick={handleHealthQuestionnaireClick} />
                <ButtonWithIcon title='Ficha facial' onClick={() => navigate(`/facial-form/${id}`)} />
                <ButtonWithIcon title='Últimas medidas corporais' />
            </div>
            <div className="self-center pt-20">
                <Button asChild variant="ghost" className="p-0" onClick={() => navigateUpdatingHeader('/appointment', TitleOfPages.appointment)}>
                    <ReactSVG src={newTreatment} />
                </Button>
            </div>

            {showPopup && (
    <div className="fixed inset-0 flex items-center justify-center bg-black font-medium bg-opacity-50">
        <div className="bg-white rounded-lg p-7 w-80 flex flex-col items-center">
            <p className="mb-4">Este cliente não possui uma Ficha saúde preenchida...</p>
            <div className="mb-4">
                <Button variant={"link"} onClick={() => navigate(`/perfil-users/${id}/questionary`)}>
                    https://meet.google.com/fjr-vsbm-fwi
                </Button>
            </div>
            <div className="flex w-full justify-around">
                <Button onClick={() => navigate(`/perfil-users/${id}/questionary`)}>
                    Enviar
                </Button>
                <Button variant={'forms'} onClick={closePopup}>
                    Fechar
                </Button>
            </div>
        </div>
    </div>
)}




        </div>
    );
}
