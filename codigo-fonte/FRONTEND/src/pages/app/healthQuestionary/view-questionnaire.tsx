import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { questions } from './questions';
import axios from 'axios';
import { env } from '@/env';

export function ViewQuestionnaire() {
    const { id } = useParams();
    const [healthQuestionnaire, setHealthQuestionnaire] = useState(null);
    const [loading, setLoading] = useState(true);

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
            <h1 className="pt-1 pb-3 flex justify-center text-2xl font-semibold">
                Questionário de Saúde
            </h1>
            <div className="p-4">
                {questions.map((question, index) => (
                    <div key={index} className="mb-2 ">
                        <h2 className="font-bold">{question.title}</h2>
                        <p>{renderYesNo(healthQuestionnaire[question.name])}</p>
                        {question.nameDescription && healthQuestionnaire[question.name] === true && (
                            <div className="mt-1 flex">
                                <h3 className="font-semibold">{question.description}</h3>
                                <p className='ml-2'>{healthQuestionnaire[question.nameDescription]}</p>
                            </div>
                        )}
                        <div className="mb-1.5 mr-3 mt-0.5 border-b border-gray-300"></div>
                    </div>
                ))}
                <div className="mb-4">
                    <h2 className="font-bold">Quantos Litros de água você bebe por dia?</h2>
                    <p>{healthQuestionnaire.drink_water}</p>
                </div>
                <div className="mb-4">
                    <h2 className="font-bold">Autoriza a divulgação de fotos antes e depois do tratamento?</h2>
                    <p>{renderYesNo(healthQuestionnaire.authorize_photos)}</p>
                </div>
            </div>
        </div>
    );
}
