// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck

import { useEffect, useState } from 'react';
import imgPerson2 from '../../assets/imgPerson2.svg';
import { ReactSVG } from 'react-svg';
import axios from 'axios';
import { env } from '../../env';
import { useTitle } from '@/hooks/useTitle';
import { useNavigate } from 'react-router-dom';

type QuestionnaryType = {
  id: number,
  client_id: string,
};

export function NotificationsForm() {
  const [healthQuestionnaries, setHealthQuestionnaries] = useState<QuestionnaryType[]>([]);
  const [anyHealthQuestionnary, setAnyHealthQuestionnary] = useState(true);
  const [clientNames, setClientNames] = useState<{ [key: string]: string }>({});
  const { setTitle } = useTitle();
  const navigate = useNavigate();

  const navigateUpdatingHeader = (path: string, title: string) => {
    setTitle(title);
    navigate(path);
  };

  useEffect(() => {
    const fetchHealthQuestionnaries = async () => {
      try {
        const response = await axios.get(`${env.VITE_API_URL}/recent-health-questionnaries?days=5`);
        if (response.data.length > 0) {
          setHealthQuestionnaries(response.data);
          setAnyHealthQuestionnary(false);

          const clientNamesMap: { [key: string]: string } = {};
          for (const questionnary of response.data) {
            const clientName = await getClientName(questionnary.client_id);
            clientNamesMap[questionnary.client_id] = clientName;
          }
          setClientNames(clientNamesMap);
        }
      } catch (error) {
        throw new Error(`Failed to fetch health questionnaire: ${error}`);
      }
    };

    fetchHealthQuestionnaries();
  }, []);

  async function getClientName(id: string) {
    const response = await axios.get(`${env.VITE_API_URL}/clientById?id=${id}`);
    return response.data.name;
  }

  return (
    <div className=''>
      <h1 className="font-semibold ml-1 pt-2 pl-3 pb-5 text-lg">Novas fichas preenchidas</h1>
      {anyHealthQuestionnary ? (
        <h1 className='font-semibold text-primary'>Não existe nenhum questionário de saúde recente</h1>
      ) : (
        <>
          {healthQuestionnaries.map((questionnary) => (
            <div
              key={questionnary.id}
              className='justify-evenly flex bg-input py-5 ml-2 mr-2 rounded-xl mb-5'
              onClick={() => navigateUpdatingHeader(`/perfil-users/${questionnary.client_id}`, clientNames[questionnary.client_id])}
            >
              <ReactSVG src={imgPerson2} />
              <div className='flex flex-col justify-between pt-1 pb-1'>
                <div className='flex justify-between'>
                  <p className='text-primary font-semibold'>
                    {clientNames[questionnary.client_id] || 'Carregando...'}
                  </p>
                  <span className='text-primary font-extrabold'>→</span>
                </div>
                <p style={{ color: 'green', margin: 0 }}>Ficha de saúde preenchida</p>
              </div>
            </div>
          ))}
        </>
      )}
    </div>
  );
}
