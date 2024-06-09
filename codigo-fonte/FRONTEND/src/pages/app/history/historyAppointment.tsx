import { useMemo, useState } from 'react';
import { Helmet } from 'react-helmet-async';

import formatDate from '@/utils/dateConversion';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { env } from '../../../env';
import { ViewFacialForm } from '../appointment/viewFacialForm';
import { ViewBodyForm } from '../appointment/viewBodyForm';
import { useNavigate } from 'react-router-dom';
import { useTitle } from '@/hooks/useTitle';
import { TitleOfPages } from '@/utils/titleOfPages';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';


type Appointment = {
  id: string
  specialty: string
  observations: string
  appointment_date: Date
  appointment_hour: string
  created_at: Date | string
  presencial: boolean
  appointment_type: 'Hair' | 'Skin' | 'Body'
  client_id: string
  user_id: string,
}

export type AppointmentSkinData = {
  appointmentId: string;
  leftFace0: boolean;
  leftFace1: boolean;
  leftFace2: boolean;
  leftFace3: boolean;
  leftFace4: boolean;
  leftFace5: boolean;
  leftFace6: boolean;
  leftFace7: boolean;
  leftFace8: boolean;
  leftFace9: boolean;
  leftFace10: boolean;
  rightFace0: boolean;
  rightFace1: boolean;
  rightFace2: boolean;
  rightFace3: boolean;
  rightFace4: boolean;
  rightFace5: boolean;
  rightFace6: boolean;
  rightFace7: boolean;
  rightFace8: boolean;
  rightFace9: boolean;
  rightFace10: boolean;
  frontFace0: boolean;
  frontFace1: boolean;
  frontFace2: boolean;
  frontFace3: boolean;
  frontFace4: boolean;
  frontFace5: boolean;
  frontFace6: boolean;
  frontFace7: boolean;
  frontFace8: boolean;
  frontFace9: boolean;
  frontFace10: boolean;
  frontFace11: boolean;
};

export type AppointmentBodyData = {
  appointmentId: string;
  backBody0: boolean;
  backBody1: boolean;
  backBody2: boolean;
  backBody3: boolean;
  backBody4: boolean;
  backBody5: boolean;
  backBody6: boolean;
  backBody7: boolean;
  backBody8: boolean;
  backBody9: boolean;
  backBody10: boolean;
  backBody11: boolean;
  backBody12: boolean;
  backBody13: boolean;
  backBody14: boolean;
  backBody15: boolean;
  backBody16: boolean;
  backBody17: boolean;
  backBody18: boolean;
  backBody19: boolean;
  backBody20: boolean;
  backBody21: boolean;
  frontBody0: boolean;
  frontBody1: boolean;
  frontBody2: boolean;
  frontBody3: boolean;
  frontBody4: boolean;
  frontBody5: boolean;
  frontBody6: boolean;
  frontBody7: boolean;
  frontBody8: boolean;
  frontBody9: boolean;
  frontBody10: boolean;
  frontBody11: boolean;
  frontBody12: boolean;
  frontBody13: boolean;
  frontBody14: boolean;
  frontBody15: boolean;
  frontBody16: boolean;
  frontBody17: boolean;
  frontBody18: boolean;
  frontBody19: boolean;
  frontBody20: boolean;
  frontBody21: boolean;
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

type Client = {
  name: string
}


export function HistoryAppointment() {
  const [appointment, setAppointment] = useState<Appointment>()
  const [appointmentSkinData, setAppointmentSkinData] = useState<AppointmentSkinData>()
  const [appointmentBodyData, setAppointmentBodyData] = useState<AppointmentBodyData>()
  const [client, setClient] = useState<Client>()
  const { appointmentId } = useParams()
  const [showPopup, setShowPopup] = useState(false);

  const navigate = useNavigate();
  const { setTitle } = useTitle();

  useMemo(async () => {
    try {
      if (appointmentId !== '') {
        const response = await axios.get(`${env.VITE_API_URL}/appointment?id=${appointmentId}`);
        setAppointment(response.data)

        if (response.data.appointment_type === 'Skin') {
          const responseSkin = await axios.get(`${env.VITE_API_URL}/appointment-skin-data?id=${response.data.id}`);
          setAppointmentSkinData(responseSkin.data)
        } else if (response.data.appointment_type === 'Body') {
          const responseBody = await axios.get(`${env.VITE_API_URL}/appointment-body-data?id=${response.data.id}`);
          setAppointmentBodyData(responseBody.data)
        }

      }
    } catch (error: any) {
      console.error('Erro ao buscar a consulta', error);
    }
  }, []);

  useMemo(async () => {
    try {
      const response = await axios.get(`${env.VITE_API_URL}/clientById?id=${appointment?.client_id}`);
      setClient(response.data)
    } catch (error: any) {
      console.error('Erro ao buscar a consulta', error);
    }

  }, [appointment]);

  const closePopup = () => {
    setShowPopup(false);
  };

  function AppointmentTypeDisplayer(appointmentType: string | undefined) {
    switch (appointmentType) {
      case 'Hair':
        return 'Capilar'
      case 'Body':
        return 'Corporal'
      case 'Skin':
        return 'Facial'
    }
  }

  function AppointmentPlaceDisplayer(appointmentPlace: boolean | undefined) {
    if (appointmentPlace === true) {
      return 'Presencial'
    } else {
      return 'Em casa'
    }
  }

  const navigateUpdatingHeader = (path: string, title: string) => {
    setTitle(title);
    navigate(path);
  };

  async function deleteAppointment(appointment_id: string | undefined, appointment_type: string | undefined) {
    try{

      if (!appointment_id) {
        toast.error('Problema ao receber código da consulta')
      }

      if (appointment_type === 'Skin') {
        await axios.delete(`${env.VITE_API_URL}/appointment-skin-data?id=${appointment_id}`);
      } else if (appointment_type === 'Body') {
        await axios.delete(`${env.VITE_API_URL}/appointment-body-data?id=${appointment_id}`);
      }
      await axios.delete(`${env.VITE_API_URL}/appointment?id=${appointment_id}`);

      toast.success('Consulta excluída!')
      navigateUpdatingHeader('/', TitleOfPages.home)
    } catch (error) {
      toast.error('Erro ao excluir consulta!')
      console.log(error)
    }

  }

  return (
    <form
      className='justify-center flex flex-col bg-input p-5 rounded-xl'
    >
      <Helmet title="history-appointment" />

      <div className="mb-3 mt-3">
        <label className="block text-sm font-medium">
          Tipo de Consulta
        </label>
        <input
          type="text"
          className="text-primary block w-full px-4 py-2 bg-transparent border-b border-gray-200 outline-none"
          readOnly={true}
          value={AppointmentTypeDisplayer(appointment?.appointment_type)}
        />
      </div>

      <div className="mb-3 mt-3">
        <label className="block text-sm font-medium">
          Especialidade
        </label>
        <input
          type="text"
          className="text-primary block w-full px-4 py-2 bg-transparent border-b border-gray-200 outline-none"
          readOnly={true}
          value={appointment?.specialty}
        />
      </div>

      <div className="mb-3 mt-3">
        <label className="block text-sm font-medium">
          Tipo de atendimento
        </label>
        <input
          type="text"
          className="text-primary block w-full px-4 py-2 bg-transparent border-b border-gray-200 outline-none"
          readOnly={true}
          value={AppointmentPlaceDisplayer(appointment?.presencial)}
        />
      </div>

      <div className="mb-3 mt-3">
        <label className="block text-sm font-medium">
          Cliente
        </label>
        <input
          type="text"
          className="text-primary block w-full px-4 py-2 bg-transparent border-b border-gray-200 outline-none"
          readOnly={true}
          value={client?.name}
        />
      </div>

      <div className="mb-3 mt-3">
        <label className="block text-sm font-medium">
          Data da consulta
        </label>
        <input
          type="date"
          className="text-primary block w-full px-4 py-2 bg-transparent border-b border-gray-200 outline-none"
          readOnly={true}
          value={formatDate(appointment?.appointment_date)}
        />
      </div>

      <div className="mb-3 mt-3">
        <label className="block text-sm font-medium">
          Horário da consulta
        </label>
        <input
          type="time"
          className="text-primary block w-full px-4 py-2 bg-transparent border-b border-gray-200 outline-none"
          readOnly={true}
          value={appointment?.appointment_hour}
        />
      </div>

      {
        (appointment?.appointment_type === 'Skin') && <ViewFacialForm
          faceSelections={{ ...appointmentSkinData }}
        />
      }

      {
        (appointment?.appointment_type === 'Body') && <ViewBodyForm
          bodySelections={{ ...appointmentBodyData }}
        />
      }

      <div className="mt-3 mb-3">
        <label className="block text-xl font-semibold pb-1">
          Anotações
        </label>
        <textarea
          className="text-primary block w-full h-44 px-4 py-2 bg-input shadow-xl rounded-xl border border-gray-200"
          readOnly={true}
          value={appointment?.observations}
        />
      </div>

      {showPopup && (
        <div className="fixed inset-0 flex items-center justify-center bg-black font-medium bg-opacity-50">
          <div className="bg-white rounded-lg p-7 w-80 flex flex-col items-center">
            <p className="mb-4 text-destructive font-semibold">Tem certeza que deseja excluir essa consulta?</p>
            <div className="flex w-full justify-around">
              <Button variant={'secondary'} onClick={closePopup}>
                Cancelar
              </Button>
              <Button
                variant={'alertred'}
                onClick={async (event) => {
                  event.preventDefault();
                  await deleteAppointment(appointment?.id, appointment?.appointment_type);
                }}
              >
                Confirmar
              </Button>
            </div>
          </div>
        </div>
      )}


      <Button
        variant={'alertred'}
        type='button'
        onClick={() => setShowPopup(true)}
        className='mt-6 mb-3'
      >
        Excluir consulta
      </Button>



    </form>

  )
}
