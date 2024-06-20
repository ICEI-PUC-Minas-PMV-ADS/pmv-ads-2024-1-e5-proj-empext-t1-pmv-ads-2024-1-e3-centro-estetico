// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck

import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { questions } from './questions';
import { Button } from '@/components/ui/button';
import axios from 'axios';
import { env } from '@/env';
import { toast } from 'sonner';

export function ViewQuestionnaire() {
    const { id } = useParams();
    const navigate = useNavigate();
    const [healthQuestionnaire, setHealthQuestionnaire] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchHealthQuestionnaire() {
            try {
                const response = await axios.get(`${env.VITE_API_URL}/health-questionnaire-by-client-id?client_id=${id}`);
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

    const deleteHealthQuestionnaire = async () => {
        try {
            await axios.delete(`${env.VITE_API_URL}/health-questionnaire?client_id=${id}`);
            toast.success('Questionário de saúde deletado com sucesso.');
            navigate(`/perfil-users/${id}`);
        } catch (error) {
            toast.error('Falha ao deletar o questionário de saúde. Tente novamente!');
        }
    };

    if (loading) {
        return <p>Loading...</p>;
    }

    if (!healthQuestionnaire) {
        return <p>Nenhum questionário de saúde encontrado.</p>;
    }

    const renderYesNo = (value: boolean) => (
        <span className={`${value ? 'text-green-500' : 'text-red-500'} font-semibold`}>
            {value ? 'Sim' : 'Não'}
        </span>
    );

    return (
      <div>
        <h1 className="flex justify-center pb-3 pt-1 text-2xl font-semibold">
          Questionário de Saúde
        </h1>

        <div className="pl-4 pr-4 pt-4">
          <h2 className="font-bold">Queixa Principal:</h2>
          <textarea
            className="h-22 mt-1 block w-full rounded-xl border border-gray-200 bg-input px-4 py-2 text-primary shadow-xl"
            readOnly={true}
            value={healthQuestionnaire.problem_description}
          />
        </div>
        <div className="p-4">
          {questions.map((question, index) => (
            <div key={index} className="mb-2 ">
              <h2 className="font-bold">{question.title}</h2>
              <p>{renderYesNo(healthQuestionnaire[question.name])}</p>
              {question.nameDescription &&
                healthQuestionnaire[question.name] === true && (
                  <div className=" flex items-center mb-2">
                    <h3 className="font-semibold">{question.description}</h3>
                    <textarea
                      className="ml-2 pl-2 pt-1 h-8 rounded-lg flex w-60 font-normal border-gray-200 text-primary shadow-xl"
                      readOnly={true}
                      value={healthQuestionnaire[question.nameDescription]}
                    />
                  </div>
                )}
              <div className="mb-1.5 mr-3 mt-0.5 border-b border-gray-300"></div>
            </div>
          ))}
          <div className="mb-3">
            <h2 className="font-bold">
              Quantos Litros de água você bebe por dia?
            </h2>
            <textarea
              className="ml-2 mt-1 pl-3 pt-1 h-8 rounded-lg flex w-60 font-normal border-gray-200 text-primary shadow-xl"
              readOnly={true}
              value={healthQuestionnaire.drink_water}
            />
          </div>
          <div className="mb-3">
            <h2 className="font-bold">
              Autoriza a divulgação de fotos antes e depois do tratamento?
            </h2>
            <p>{renderYesNo(healthQuestionnaire.authorize_photos)}</p>
          </div>
        </div>
        <div className="mb-4 flex justify-center">
          <Button variant={"alertred"} onClick={deleteHealthQuestionnaire}>
            Excluir questionário
          </Button>
        </div>
      </div>
    );
}
