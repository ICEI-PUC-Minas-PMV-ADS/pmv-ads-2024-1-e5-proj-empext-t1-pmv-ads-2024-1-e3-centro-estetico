import { useNavigate } from 'react-router-dom';
import { ReactSVG } from 'react-svg';
import ArrowRight from './assets/arrow.svg';
import Calendar from './assets/calendar.svg';

import Time from './assets/Time.svg';
// import { Container } from './styles';

const AppointmentsList = () => {
  // const { clientId } = useParams()
  // const id = clientId ?? ''
  //Quando houver backend Substituir query mockada por
  // const query = useGetAppointmentList(id);
  const navigate = useNavigate();

 const query = [
    {
      id: '61c0e6ac-c93b-4dd5-ae85-9525838ab7fc',
      clientId: '71de1fcb-a483-46c9-aabb-20d2b7489c13',
      specialty: 'dermatologista',
      observations: ' pacienteApresentaPeleX',
      appointment_date: '2021-09-01',
      appointment_hour: '10:00',
      presencial: true,
      appointment_type: 'capilar',

    },
    {
      id: '529bdfae-b78b-484f-bea6-26da3013bd54c',
      clientId: '71de1fcb-a483-46c9-aabb-20d2b7489c13',
      specialty: 'dermatologista',
      observations: null,
      appointment_date: '2021-09-01',
      appointment_hour: '10:00',
      presencial: true,
      appointment_type: 'facial',
    }
 ]

 const formatDate = (date: string) => {
    const dateObj = new Date(date)
    return dateObj.toLocaleDateString('pt-BR')
 }


  return (
    <div className="container mx-auto gap-10">
      <h1 className="pl-3 pt-6 text-lg font-semibold mb-6">
        Histórico de Consultas
      </h1>
      {query.map((item) => (
        <div key={item.id}>
            <div className="inline-block h-20 bg-white border border-blue-600 rounded-md shadow-sm mr-4 mb-4 w-72 text-sm" onClick={() => navigate(`/history-appointment/${item.id}`)}>
              <div className='mr-2 ml-2'>
                <div className='mb-2 flex justify-between font-bold'>
                  <div className='mb-4 mt-2 flex'> <ReactSVG src={Calendar}/> {formatDate(item.appointment_date)} </div>
                  <ReactSVG src={ArrowRight} className=''/>
                </div>
                <div className='mb-2 flex justify-between'>
                  <div className='flex'> <ReactSVG src={Time}/>{item.appointment_hour}  </div>
                  <div> {item.appointment_type} </div>
                </div>
              </div>
            </div>
        </div>
      ))}
    </div>
  );
}

export default AppointmentsList;