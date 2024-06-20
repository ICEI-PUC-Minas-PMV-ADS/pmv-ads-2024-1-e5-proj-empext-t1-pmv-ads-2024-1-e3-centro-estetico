// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck

import { registerCLient } from '@/api/sign-up';
import { Button } from '@/components/ui/button';
import { useTitle } from '@/hooks/useTitle';
import { TitleOfPages } from '@/utils/titleOfPages';
import { useMutation } from '@tanstack/react-query';
import { Controller, useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { toast } from 'sonner';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useEffect } from 'react';


const Gender = z.enum(['Male', 'Female'])

const registerClientForm = z
  .object({
    name: z.string().min(3, 'Nomes precisam ter pelo menos 3 letras'),
    birth_date: z.preprocess((arg) => {
      if (arg instanceof Date) return arg
      if (typeof arg === 'string') return new Date(arg)
    }, z.date({ message: 'Data inválida' })),
    address: z.string().min(3, 'Endereço precisa ter ao menos 3 caracteres'),
    email: z.string().email({ message: 'Endereço de e-mail inválido.' }),
    phone: z
    .string()
    .regex(
      /^(\(\d{2}\)|\d{2})-?\s?9-?\s?\d{4,5}-?\d{4}$/,
      'O número de telefone está incorreto Ex: 31990000000',
    ),
    gender: Gender,
  })

type RegisterClientForm = z.infer<typeof registerClientForm>

export function RegisterClients() {
  const { setTitle, setPreviousPath, setPreviousTitle, title } = useTitle();

  const navigate = useNavigate()

  const navigateUpdatingHeader = (path: string, title: string) => {
    setTitle(title)
    navigate(path)
  }

  useEffect(() => {
    setPreviousPath(window.location.pathname)
    setPreviousTitle(title)
  },[])

  const {
    handleSubmit,
    register,
    control,
    formState: { isSubmitting, errors }
  } = useForm<RegisterClientForm>({
    resolver: zodResolver(registerClientForm),
    defaultValues: {
      gender: 'Female'
    },
  })

  const { mutateAsync: reg } = useMutation({
    mutationFn: registerCLient,
  })


  async function handleRegisterClient(data: RegisterClientForm) {
    try {
      await reg(data)

      navigateUpdatingHeader('/', TitleOfPages.home)
      toast.success('Cliente cadastrado com sucesso!')
    } catch (error) {
      toast.error('Erro ao cadastrar usuário!')
    }
  }

  return (

    <div className="container mx-auto">
      <form onSubmit={handleSubmit(handleRegisterClient)}>
        <div className="mb-4">
          <label className="block text-sm font-medium" htmlFor="nome">
            Nome
          </label>
          <input
            id="name"
            type="text"
            className="block w-full px-4 py-2 bg-transparent border-b-2 border-gray-300 outline-none text-primary"
            {...register('name')}
          />
          {errors.name && (
            <small className="text-red-500">{errors.name.message}</small>
          )}
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium" htmlFor="email">
            E-mail
          </label>
          <input
            id="email"
            type="email"
            className="block w-full px-4 py-2 bg-transparent border-b-2 border-gray-300 outline-none  text-primary"
            {...register('email')}
          />
          {errors.email && (
            <small className="text-red-500">{errors.email.message}</small>
          )}
        </div>

        <div className='flex'>
          <div className="mb-4">
            <label className="block text-sm font-medium" htmlFor="endereco">
              Endereço
            </label>
            <input
              id="address"
              type="text"
              className="block w-full px-4 py-2 bg-transparent border-b-2 border-gray-300 outline-none text-primary "
              {...register('address')}
            />
            {errors.address && (
              <small className="text-red-500">{errors.address.message}</small>
            )}
          </div>
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium" htmlFor="celular">
            Celular
          </label>
          <input
            id="phone"
            type="tel"
            className="block w-full px-4 py-2 bg-transparent border-b-2 border-gray-300 outline-none text-primary"
            {...register('phone')}
          />
          {errors.phone && (
            <small className="text-red-500">{errors.phone.message}</small>
          )}
        </div>
        <div className="mb-4">
          <label className="block mb-2 text-sm font-medium" htmlFor="gender">
            Gênero
          </label>
          <div className="flex items-center">
            <Controller
              name="gender"
              control={control}
              render={({ field }) => (
                <>
                  <input
                    id="male"
                    type="radio"
                    className="mr-2 bg-transparent checked:bg-primary ring-offset-1 h-3 w-3 rounded-full appearance-none box-border ring-2 ring-primary"
                    value="Male"
                    onChange={(e) => field.onChange(e.target.value)}
                    checked={field.value === "Male"}
                  />
                  <label htmlFor="male">Masculino</label>

                  <input
                    id="female"
                    type="radio"
                    className="ml-4 mr-2 bg-transparent checked:bg-primary checked:ring-offset-1 h-3 w-3 rounded-full appearance-none box-border ring-2 ring-primary"
                    value="Female"
                    onChange={(e) => field.onChange(e.target.value)}
                    checked={field.value === "Female"} />
                  <label htmlFor="female">Feminino</label>
                </>
              )}
            />
          </div>
        </div>

        <div className="mb-4">
          <label className="block mb-2 text-sm font-medium" htmlFor="dataNascimento">
            Data de Nascimento
          </label>
          <input
            id="birth_date"
            type="date"
            className="block w-full px-4 py-2 bg-transparent border-b-2 border-gray-300 outline-none text-primary"
            {...register('birth_date')}
          />
          {errors.birth_date && (
            <small className="text-red-500">Data inválida</small>
          )}
        </div>

        <Button
          type="submit"
          variant={"primary"}
          className="w-full mt-2 px-4 py-2 text-sm font-medium"
          disabled={isSubmitting}
        >
          Cadastrar
        </Button>
      </form>
    </div>
  );
};
