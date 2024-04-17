
import { registerCLient } from '@/api/sign-up';
import { Button } from '@/components/ui/button';
import { useMutation } from '@tanstack/react-query';
import { Controller, useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { toast } from 'sonner';
import { z } from 'zod';


const Gender = z.enum(['Male', 'Female'])

const registerClientForm = z
  .object({
    name: z.string().min(3, 'Nomes precisam ter pelo menos 3 letras'),
    birth_date: z.preprocess((arg) => {
      if (arg instanceof Date) return arg
      if (typeof arg === 'string') return new Date(arg)
    }, z.date()),
    address: z.string().regex(/^(.+),\s*(\d+),\s*(.+?)(?:,\s*(.+))?$/, {
      message:
        'Endereço deve seguir o padrão: Rua, número, bairro, complemento (complemento é opcional).',
    }),
    email: z.string().email({ message: 'Endereço de e-mail inválido.' }),
    phone: z
      .string()
      .regex(
        /^(\(\d{2}\)|\d{2})-?\s?9-?\s?\d{4,5}-?\d{4}$/,
        'Número de telefone inválido.',
      ),
    gender: Gender,
  })

type RegisterClientForm = z.infer<typeof registerClientForm>

export function RegisterClients() {

  const navigate = useNavigate()

  const {
    handleSubmit,
    register,
    control,
  } = useForm<RegisterClientForm>({
    // resolver: zodResolver(registerClientForm),
  })

  const { mutateAsync: reg } = useMutation({
    mutationFn: registerCLient,
  })


  async function handleRegisterClient(data: RegisterClientForm) {
    try {
      await reg(data)

      navigate('/')
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
              className="block w-full px-4 py-2 bg-transparent border-b-2 border-gray-300 outline-none text-[#00A27B]"
              {...register('name')}
              />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium" htmlFor="email">
              E-mail
            </label>
            <input
              id="email"
              type="email"
              className="block w-full px-4 py-2 bg-transparent border-b-2 border-gray-300 outline-none  text-[#00A27B]"
              {...register('email')}
            />
          </div>

          <div className='flex'>
            <div className="mb-4">
              <label className="block text-sm font-medium" htmlFor="endereco">
                Endereço
              </label>
              <input
                id="address"
                type="text"
                className="block w-full px-4 py-2 bg-transparent border-b-2 border-gray-300 outline-none text-[#00A27B] "
                {...register('address')}
              />
            </div>
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium" htmlFor="celular">
              Celular
            </label>
            <input
              id="phone"
              type="tel"
              className="block w-full px-4 py-2 bg-transparent border-b-2 border-gray-300 outline-none text-[#00A27B]"
              {...register('phone')}
            />
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
                  className="mr-2 bg-transparent checked:bg-[#00A27B] ring-offset-1 h-3 w-3 rounded-full appearance-none box-border ring-2 ring-[#00A27B]"
                  value="Male"
                  onChange={(e) => field.onChange(e.target.value)}
                  checked={field.value === "Male"}
                />
                <label htmlFor="male">Masculino</label>

                <input
                  id="female"
                  type="radio"
                  className="ml-4 mr-2 bg-transparent checked:bg-[#00A27B] checked:ring-offset-1 h-3 w-3 rounded-full appearance-none box-border ring-2 ring-[#00A27B]"
                  value="Female"
                  onChange={(e) => field.onChange(e.target.value)}
                  checked={field.value === "Female"}                  />
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
                  id="dataNascimento"
                  type="date"
                  className="block w-full px-4 py-2 bg-transparent border-b-2 border-gray-300 outline-none text-[#00A27B]"
                  {...register('birth_date')}
                />
              </div>

              <Button
                type="submit"
                className="w-full mt-2 px-4 py-2 text-sm font-medium text-white bg-[#00A27B] rounded-md focus:outline-none focus:ring-1 active:bg-[#00a27cbf]"
              >
                Cadastrar
              </Button>
              </form>
          </div>
 );
};
