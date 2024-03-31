import { useMutation } from '@tanstack/react-query'
import { UserPlus } from 'lucide-react'
import { Helmet } from 'react-helmet-async'
import { useForm } from 'react-hook-form'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'sonner'
import { z } from 'zod'

import { signIn } from '@/api/sign-in'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

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

  async function handleSignIn({ email, password }: SignInForm) {
    try {
      await authenticate({ email, password })

      navigate('/')
      toast.success('Bem vinda!')
    } catch (error) {
      toast.error('Credenciais inválidas!')
    }
  }

  return (
    <>
      <Helmet title="Login" />
      <div className="p-8">
        <Button variant="secondary" className="absolute right-8 top-8" asChild>
          <Link to="/sign-up">
            <UserPlus className="h-5 w-5" />
            <span className="ml-2">Cadastre-se</span>
          </Link>
        </Button>
        <div className="flex w-[350px] flex-col justify-center gap-6">
          <div className="flex flex-col gap-2 text-center">
            <h1 className="text-2xl font-semibold tracking-tight">
              Acessar Painel
            </h1>

            <p className="text-sm text-muted-foreground">
              Acesse o painel e acompanhe seus tratamentos
            </p>
          </div>
          <form onSubmit={handleSubmit(handleSignIn)} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">Seu e-mail</Label>
              <Input
                id="email"
                type="email"
                className="w-full rounded-md border border-foreground/5 p-3"
                {...register('email')}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Sua senha</Label>
              <Input
                id="password"
                type="password"
                className="w-full rounded-md border border-foreground/5 p-3"
                {...register('password')}
              />
            </div>

            <Button disabled={isSubmitting} type="submit" className="w-full">
              Acessar Painel
            </Button>
          </form>
        </div>
      </div>
    </>
  )
}
