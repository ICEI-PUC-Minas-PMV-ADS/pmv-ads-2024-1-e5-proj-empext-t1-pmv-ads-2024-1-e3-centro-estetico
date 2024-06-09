import { useMutation } from '@tanstack/react-query'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { toast } from 'sonner'
import { z } from 'zod'
import Logo from '../../assets/logo.svg'

import { signIn } from '@/api/sign-in'
import { ReactSVG } from 'react-svg'
import { useEmail } from '@/hooks/useEmail'

const signInForm = z.object({
  email: z.string().email(),
  password: z.string().min(6),
})

type SignInForm = z.infer<typeof signInForm>

export function SignIn() {
  const navigate = useNavigate()
  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<SignInForm>()

  const { mutateAsync: authenticate } = useMutation({
    mutationFn: signIn,
  })

  const { setEmail } = useEmail();

  async function handleSignIn({ email, password }: SignInForm) {
    try {
      await authenticate({ email, password })
      setEmail(email)
      navigate('/')
      toast.success('Bem vinda!')
    } catch (error) {
      toast.error('Credenciais inválidas!')
    }
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <div className="mb-20">
      <ReactSVG src={Logo}/>
      </div>

  <form onSubmit={handleSubmit(handleSignIn)} className='w-full px-8'>
    <div className="mb-4 ">
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

    <div className="mb-4">
      <label className="block text-sm font-medium" htmlFor="nome">
        Senha
      </label>
      <input
        id="password"
        type="password"
        className="block w-full px-4 py-2 bg-transparent border-b-2 border-gray-300 outline-none text-[#00A27B]"
        {...register('password')}
        />
    </div>
        <button
          type="submit"
           disabled={isSubmitting}
          className="w-full mt-2 px-4 py-2 text-sm font-medium text-white bg-[#00A27B] rounded-md focus:outline-none focus:ring-1 active:bg-[#00a27cbf]"
        >
          Entrar
        </button>
        <div className=' mt-3 text-center'>
          <a href='/sign-up'  className="inline-block align-baseline text-sm text-[#00A27B] hover:[#00a27c66]"
  >
            Quero me cadastrar
          </a>
        </div>
        </form>
    </div>

  )
}
