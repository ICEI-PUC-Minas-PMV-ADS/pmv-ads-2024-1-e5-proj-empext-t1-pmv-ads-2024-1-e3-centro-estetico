import { Helmet } from 'react-helmet-async'
import { useState, useEffect, useMemo } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { ComboboxDemo } from '@/components/ui/combobox';
import { z } from 'zod';
import { DatePickerDemo } from '@/components/ui/data-picker';
import { Button } from '@/components/ui/button';
import { zodResolver } from '@hookform/resolvers/zod';
import { toast } from 'sonner';
import { RadioGroup } from '@radix-ui/react-dropdown-menu';
import { env } from '../../../env'
import axios from 'axios';
import { postConsultation } from '@/api/consultation';
import { useMutation } from '@tanstack/react-query';
import { FacialForm } from './facialForm';

const Local = z.enum(['OnSight', 'InHome'])

type client = {
  id: string,
  name: string
}

const registerConsultationForm = z
  .object({
    local: Local,
    specialty: z.string().min(1, 'Preencha o nome do procedimento'),
    client: z.string({required_error: 'Selecione um cliente'}),
    hour: z.string().min(1, 'Selecione o horário da consulta'),
    annotations: z.string().optional(),
    consultationType: z.string({required_error: 'Selecione o tipo de consulta'}),
    date: z.date({required_error: 'Selecione uma data'})
  })

type RegisterConsultationForm = z.infer<typeof registerConsultationForm>


export function Consultation() {
  const [date, setDate] = useState<Date>()
  const [clients, setClients] = useState<client[]>([])
  const [client, setClient] = useState<string>()
  const [consultationType, setConsultationType] = useState<string>()
  const [isFacial, setIsFacial] = useState<boolean>(false)


  const {
    handleSubmit,
    register,
    setValue,
    control,
    formState: { isSubmitting, errors },
  } = useForm<RegisterConsultationForm>({
    resolver: zodResolver(registerConsultationForm),
    defaultValues: {
      local: 'OnSight'
    },
  })

  const { mutateAsync: reg } = useMutation({
    mutationFn: postConsultation,
  })
  
  useMemo(async () => {
    const response = await axios.get(`${env.VITE_API_URL}/clients?name=`);
    setClients(response.data)
  }, [])

  useEffect(() => {
    if (date) {
      setValue('date', date, { shouldValidate: true })
    }
  }, [date, setDate])

  useEffect(() => {
    if (consultationType) {
      setValue('consultationType', consultationType, { shouldValidate: true })
      if(consultationType === 'Skin') {
        setIsFacial(true)
      } else {
        setIsFacial(false)
      }
    }
  }, [consultationType, setConsultationType])

  useEffect(() => {
    if (client) {
      setValue('client', client, { shouldValidate: true })
    }
  }, [client, setValue])

  async function handlePostConsultation(data: RegisterConsultationForm) {
    try {
      const { ...regData } = data
      console.log(regData)
  
      await reg(regData)

      toast.success('Consulta cadastrada!')
    } catch (error) {
      toast.error('Erro ao cadastrar consulta!')
    }
  }

  return (
    <form
      className='justify-center flex flex-col bg-input p-5 rounded-xl'
      onSubmit={handleSubmit(handlePostConsultation)}

    >
      <Helmet title="Consultation" />

      <ComboboxDemo
        title="Tipo de consulta"
        needSearch={false}
        selectFunction={setConsultationType}
        options={[
          {
            name: "Capilar",
            id: "Hair"
          },
          {
            name: "Corporal",
            id: "Body"
          },
          {
            name: "Facial",
            id: "Skin"
          },

        ]}
        
      />
        {errors.consultationType && (
          <small className="text-red-500">{errors.consultationType.message}</small>
        )}

      <div className="mb-6 mt-6">
        <label className="block text-sm font-medium" htmlFor="especialidade" >
          Especialidade
        </label>
        <input
          id="specialty"
          type="text"
          className="text-primary block w-full px-4 py-2 bg-transparent border-b border-gray-200 outline-none"
          placeholder='Peeling de Diamante...'
          {...register('specialty')}
        />
        {errors.specialty && (
          <small className="text-red-500">{errors.specialty.message}</small>
        )}
      </div>

      <Controller
        name="local"
        control={control}
        render={({ field }) => (
          <RadioGroup
            defaultValue="onSight"
            aria-labelledby="local"
            onValueChange={field.onChange}
            value={field.value}
            className="mb-7 pb-3 border-b border-gray-200 outline-none"
            {...register('local')}
          >
              <label className="block text-sm font-medium" htmlFor="nome">
                Tipo de atendimento
              </label>

              <div className='flex justify-between mt-2 '>
                <div>
                  <input
                    id="onSight"
                    type="radio"
                    className="mr-2 bg-transparent checked:bg-primary ring-offset-1 h-3 w-3 rounded-full appearance-none box-border ring-2 ring-primary"
                    value="OnSight"
                    onChange={(e) => field.onChange(e.target.value)}
                    checked={field.value === "OnSight"}
                  />
                  <label htmlFor="onSight" className="text-primary font-semibold text-base">Presencial</label>
                </div>

                <div>
                  <input
                    id="inHome"
                    type="radio"
                    className="ml-4 mr-2 bg-transparent checked:bg-primary checked:ring-offset-1 h-3 w-3 rounded-full appearance-none box-border ring-2 ring-primary"
                    value="InHome"
                    onChange={(e) => field.onChange(e.target.value)}
                    checked={field.value === "InHome"} />
                  <label htmlFor="inHome" className="text-primary font-semibold text-base pr-5">Casa</label>
                </div>
              </div>
          </RadioGroup>

        )}
      />

      <ComboboxDemo
        title="Cliente"
        needSearch={true}
        selectFunction={setClient}
        options={clients}
      />
      {errors.client && (
        <small className="text-red-500">{errors.client.message}</small>
      )}

      <div className="mb-7 mt-7">
        <label className="block text-sm font-medium pb-2" htmlFor="date">
          Data da consulta
        </label>
        <DatePickerDemo
          selectDate={setDate}
        />
        {errors.date && (
          <small className="text-red-500">{errors.date.message}</small>
        )}
      </div>

      <div className="mb-6">
        <label className="block text-sm font-medium" htmlFor="hour">
          Horário da consulta
        </label>
        <input
          id="hour"
          type="time"
          className="text-primary block w-full px-4 py-2 bg-transparent border-b border-gray-200 outline-none"
          {...register('hour')}
        />
        {errors.hour && (
          <small className="text-red-500">{errors.hour.message}</small>
        )}
      </div>

      {
        isFacial && <FacialForm />
      }

      <div className="mt-3 mb-6">
        <label className="block text-xl font-semibold pb-1" htmlFor="anotations">
          Anotações
        </label>
        <textarea
          placeholder='Anote aqui o necessário...'
          id="anotations"
          className="text-primary block w-full h-44 px-4 py-2 bg-input shadow-xl rounded-xl border border-gray-200"
          {...register('annotations')}
        />
      </div>


      <Button
        variant={'primary'}
        type='submit'
        className='mt-6 mb-3'
        disabled={isSubmitting}
      >
        Salvar
      </Button>

    </form>

  )
}
