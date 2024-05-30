import { Helmet } from 'react-helmet-async'
import { useState, useMemo } from 'react';

import { env } from '../../../env'
import axios from 'axios';
import { ViewFacialForm } from '../appointment/viewFacialForm';
import formatDate from '@/utils/dateConversion';


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
  image_data: {
    leftFace0?: boolean
    leftFace1?: boolean
    leftFace2?: boolean
    leftFace3?: boolean
    leftFace4?: boolean
    leftFace5?: boolean
    leftFace6?: boolean
    leftFace7?: boolean
    leftFace8?: boolean
    leftFace9?: boolean
    leftFace10?: boolean
    rightFace0?: boolean
    rightFace1?: boolean
    rightFace2?: boolean
    rightFace3?: boolean
    rightFace4?: boolean
    rightFace5?: boolean
    rightFace6?: boolean
    rightFace7?: boolean
    rightFace8?: boolean
    rightFace9?: boolean
    rightFace10?: boolean
    frontFace0?: boolean
    frontFace1?: boolean
    frontFace2?: boolean
    frontFace3?: boolean
    frontFace4?: boolean
    frontFace5?: boolean
    frontFace6?: boolean
    frontFace7?: boolean
    frontFace8?: boolean
    frontFace9?: boolean
    frontFace10?: boolean
    frontFace11?: boolean
  }
}

type Client = {
  name: string
}


export function HistoryAppointment() {
  const [appointment, setAppointment] = useState<Appointment>()
  const [client, setClient] = useState<Client>()

  //Quando existir a tela de histórico, ajustar para passar o ID da consulta de forma dinâmica

  const [appointmentId, setAppointmentId] = useState<string>('bf1da5f3-832a-44c2-a802-3b5bd977f76b')

  useMemo(async () => {
    try {
      if(appointmentId !== '') {
        const response = await axios.get(`${env.VITE_API_URL}/appointment?id=${appointmentId}`);
        setAppointment(response.data)
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

  function AppointmentTypeDisplayer(appointmentType: string | undefined) {
    switch(appointmentType) {
      case 'Hair':
        return 'Capilar'
      case 'Body':
        return 'Corporal'
      case 'Skin':
        return 'Facial'
    }
  }

  function AppointmentPlaceDisplayer(appointmentPlace: boolean | undefined) {
    if(appointmentPlace === true) {
      return 'Presencial'
    } else {
      return 'Em casa'
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
          faceSelections={appointment.image_data}
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



    </form>

  )
}