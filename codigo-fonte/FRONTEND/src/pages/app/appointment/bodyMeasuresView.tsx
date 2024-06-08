import { useMemo, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { env } from '../../../env';

export type AppointmentBodyData = {
    appointmentId: string;
    abdomenTop?: number;
    abdomenBottom?: number;
    waist?: number;
    hip?: number;
    upperLegProxRight?: number;
    upperLegProxLeft?: number;
    mediumLegRight?: number;
    mediumLegLeft?: number;
    distalLegRight?: number;
    distalLegLeft?: number;
    legRight?: number;
    legLeft?: number;
    armRight?: number;
    armLeft?: number;
    chestRight?: number;
    chestLeft?: number;
};


export function BodyMeasuresView() {
    const [appointmentBodyData, setAppointmentBodyData] = useState<AppointmentBodyData>()
    const [appointmentNotFound, setAppointmentNotFound] = useState(true)
    const [appointmentErrorMessage, setAppointmentErrorMessage] = useState('Carregando dados')
    const { clientId } = useParams()

    useMemo(async () => {
        try {
            if (clientId !== '') {
                const responseAppointment = await axios.get(`${env.VITE_API_URL}/last-body-appointment?id=${clientId}`);
                const responseBodyData = await axios.get(`${env.VITE_API_URL}/appointment-body-data?id=${responseAppointment.data.id}`);
                setAppointmentBodyData(responseBodyData.data)
                setAppointmentNotFound(false)
            }
        } catch (error: any) {
            if (error.response.status === 404) {
                setAppointmentErrorMessage('O cliente não possui consultas corporais')
                setAppointmentNotFound(true)
            }
            console.error('Erro ao buscar a consulta', error);
        }
    }, []);



    return (
        <form
            className='justify-center flex flex-col bg-input p-5 rounded-xl'
        >

            {
                appointmentNotFound ? <h1 className="text-m font-semibold text-center text-primary">{appointmentErrorMessage}</h1> :
                    <>

                        <h1 className="text-xl font-semibold text-center pb-6">Medidas Corporais</h1>
                        <div>
                            <div className="pt-4 flex">
                                <label className="block text-sm font-medium self-center">
                                    Abdômen - umbilical (5 cm acima):
                                </label>
                                <input
                                    className="ml-2 text-sm rounded-lg px-2 py-1 font-normal w-full bg-background"
                                    readOnly={true}
                                    value={appointmentBodyData?.abdomenTop}
                                />
                            </div>

                            <div className="pt-4 flex">
                                <label className="block text-sm font-medium self-center">
                                    Cintura - umbilical:
                                </label>
                                <input
                                    className="ml-2 text-sm rounded-lg px-2 py-1 font-normal w-full bg-background"
                                    readOnly={true}
                                    value={appointmentBodyData?.waist}
                                />
                            </div>

                            <div className="pt-4 flex">
                                <label className="block text-sm font-medium self-center">
                                    Abdômen - umbilical (5 cm abaixo):
                                </label>
                                <input
                                    className="ml-2 text-sm rounded-lg px-2 py-1 font-normal w-full bg-background"
                                    readOnly={true}
                                    value={appointmentBodyData?.abdomenBottom}
                                />
                            </div>

                            <div className="pt-4 flex">
                                <label className="block text-sm font-medium self-center">
                                    Quadril - linha do trocânter maior:
                                </label>
                                <input
                                    className="ml-2 text-sm rounded-lg px-2 py-1 font-normal w-full bg-background"
                                    readOnly={true}
                                    value={appointmentBodyData?.hip}
                                />
                            </div>

                            <div className="pt-8 flex flex-col">
                                <label className="block text-sm font-medium self-center">
                                    Coxa Proximal - ponto médio entre o trocânter maior e a base da patela
                                </label>
                                <div className='flex justify-evenly'>
                                    <div className='flex pt-3'>
                                        <h2 className='self-center font-semibold text-primary'>D:</h2>
                                        <input
                                            className="ml-2 text-sm rounded-lg px-2 py-1 font-normal w-full bg-background"
                                            readOnly={true}
                                            value={appointmentBodyData?.upperLegProxRight}
                                        />
                                    </div>
                                    <div className='flex pt-3'>
                                        <h2 className='self-center font-semibold text-primary pl-3'>E:</h2>
                                        <input
                                            className="ml-2 text-sm rounded-lg px-2 py-1 font-normal w-full bg-background"
                                            readOnly={true}
                                            value={appointmentBodyData?.upperLegProxLeft}
                                        />
                                    </div>
                                </div>
                            </div>

                            <div className="pt-4 flex flex-col">
                                <label className="block text-sm font-medium self-center">
                                    Coxa Média - ponto médio entre a região inguinal e a base da patela
                                </label>
                                <div className='flex justify-evenly'>
                                    <div className='flex pt-3'>
                                        <h2 className='self-center font-semibold text-primary'>D:</h2>
                                        <input
                                            className="ml-2 text-sm rounded-lg px-2 py-1 font-normal w-full bg-background"
                                            readOnly={true}
                                            value={appointmentBodyData?.mediumLegRight}
                                        />
                                    </div>
                                    <div className='flex pt-3'>
                                        <h2 className='self-center font-semibold text-primary pl-3'>E:</h2>
                                        <input
                                            className="ml-2 text-sm rounded-lg px-2 py-1 font-normal w-full bg-background"
                                            readOnly={true}
                                            value={appointmentBodyData?.mediumLegLeft}
                                        />
                                    </div>
                                </div>
                            </div>

                            <div className="pt-4 flex flex-col">
                                <label className="block text-sm font-medium self-center">
                                    Coxa Distal - imediatamente acima da base da patela
                                </label>
                                <div className='flex justify-evenly'>
                                    <div className='flex pt-3'>
                                        <h2 className='self-center font-semibold text-primary'>D:</h2>
                                        <input
                                            className="ml-2 text-sm rounded-lg px-2 py-1 font-normal w-full bg-background"
                                            readOnly={true}
                                            value={appointmentBodyData?.distalLegRight}
                                        />
                                    </div>
                                    <div className='flex pt-3'>
                                        <h2 className='self-center font-semibold text-primary pl-3'>E:</h2>
                                        <input
                                            className="ml-2 text-sm rounded-lg px-2 py-1 font-normal w-full bg-background"
                                            readOnly={true}
                                            value={appointmentBodyData?.distalLegLeft}
                                        />
                                    </div>
                                </div>
                            </div>

                            <div className="pt-4 flex flex-col">
                                <label className="block text-sm font-medium self-center">
                                    Perna - ponto médio entre a fossa poplítea e calcâneo
                                </label>
                                <   div className='flex justify-evenly'>
                                    <div className='flex pt-3'>
                                        <h2 className='self-center font-semibold text-primary'>D:</h2>
                                        <input
                                            className="ml-2 text-sm rounded-lg px-2 py-1 font-normal w-full bg-background"
                                            readOnly={true}
                                            value={appointmentBodyData?.legRight}
                                        />
                                    </div>
                                    <div className='flex pt-3'>
                                        <h2 className='self-center font-semibold text-primary pl-3'>E:</h2>
                                        <input
                                            className="ml-2 text-sm rounded-lg px-2 py-1 font-normal w-full bg-background"
                                            readOnly={true}
                                            value={appointmentBodyData?.legLeft}
                                        />
                                    </div>
                                </div>
                            </div>

                            <div className="pt-4 flex flex-col">
                                <label className="block text-sm font-medium self-center">
                                    Braço - ponto médio entre acrômio de tróclea
                                </label>
                                <div className='flex justify-evenly'>
                                    <div className='flex pt-3'>
                                        <h2 className='self-center font-semibold text-primary'>D:</h2>
                                        <input
                                            className="ml-2 text-sm rounded-lg px-2 py-1 font-normal w-full bg-background"
                                            readOnly={true}
                                            value={appointmentBodyData?.armRight}
                                        />
                                    </div>
                                    <div className='flex pt-3'>
                                        <h2 className='self-center font-semibold text-primary pl-3'>E:</h2>
                                        <input
                                            className="ml-2 text-sm rounded-lg px-2 py-1 font-normal w-full bg-background"
                                            readOnly={true}
                                            value={appointmentBodyData?.armLeft}
                                        />
                                    </div>
                                </div>
                            </div>

                            <div className="pt-4 flex flex-col">
                                <label className="block text-sm font-medium self-center">
                                    Peitoral - prega axilar (5 cm abaixo)
                                </label>
                                <div className='flex justify-evenly'>
                                    <div className='flex pt-3'>
                                        <h2 className='self-center font-semibold text-primary'>D:</h2>
                                        <input
                                            className="ml-2 text-sm rounded-lg px-2 py-1 font-normal bg-background w-full"
                                            readOnly={true}
                                            value={appointmentBodyData?.chestRight}
                                        />
                                    </div>
                                    <div className='flex pt-3'>
                                        <h2 className='self-center font-semibold text-primary pl-3'>E:</h2>
                                        <input
                                            className="ml-2 text-sm rounded-lg px-2 py-1 font-normal bg-background w-full"
                                            readOnly={true}
                                            value={appointmentBodyData?.chestLeft}
                                        />
                                    </div>
                                </div>
                            </div>

                        </div>
                    </>
            }


        </form>

    )
}
