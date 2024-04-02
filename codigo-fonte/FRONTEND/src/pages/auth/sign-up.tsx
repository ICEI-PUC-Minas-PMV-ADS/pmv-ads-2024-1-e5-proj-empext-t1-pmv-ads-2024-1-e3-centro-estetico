import { zodResolver } from '@hookform/resolvers/zod'
import { useMutation } from '@tanstack/react-query'
import { format } from 'date-fns'
import { ptBR } from 'date-fns/locale/pt-BR'
import {
  ALargeSmall,
  ArrowUpDown,
  Blend,
  CalendarHeart,
  Lock,
  LogIn,
  Mail,
  MapPin,
  Smartphone,
} from 'lucide-react'
import { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { Controller, useForm } from 'react-hook-form'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'sonner'
import { z } from 'zod'

import { signUp } from '@/api/sign-up'
import { Button } from '@/components/ui/button'
import { Calendar } from '@/components/ui/calendar'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import { cn } from '@/lib/utils'

const MaritalStatus = z.enum(['Married', 'Single', 'Divorced'])
const Gender = z.enum(['Male', 'Female'])

const signUpForm = z
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
    marital_status: MaritalStatus,
    email: z.string().email({ message: 'Endereço de e-mail inválido.' }),
    phone: z
      .string()
      .regex(
        /^(\(\d{2}\)|\d{2})-?\s?9-?\s?\d{4,5}-?\d{4}$/,
        'Número de telefone inválido.',
      ),
    gender: Gender,
    password: z.string().min(6, 'Senha precisa ter pelo menos 6 caracteres'),
    password_confirmation: z.string(),
  })
  .superRefine((data, ctx) => {
    if (data.password !== data.password_confirmation) {
      ctx.addIssue({
        path: ['password_confirmation'],
        message: 'As senhas precisam ser iguais.',
        code: 'custom',
      })
    }
  })

type SignUpForm = z.infer<typeof signUpForm>

export function SignUp() {
  const navigate = useNavigate()
  const [date, setDate] = useState<Date>()

  const {
    handleSubmit,
    register,
    setValue,
    control,
    formState: { isSubmitting, errors },
  } = useForm<SignUpForm>({
    resolver: zodResolver(signUpForm),
    defaultValues: {
      marital_status: 'Married',
      gender: 'Female',
    },
  })

  const { mutateAsync: reg } = useMutation({
    mutationFn: signUp,
  })

  useEffect(() => {
    if (date) {
      setValue('birth_date', date, { shouldValidate: true })
    }
  }, [date, setValue])

  async function handleSignUp(data: SignUpForm) {
    try {
      // eslint-disable-next-line
      const { password_confirmation, ...regData } = data

      await reg(regData)

      navigate('/sign-in')
      toast.success('Usuário cadastrado com sucesso!')
    } catch (error) {
      toast.error('Erro ao cadastrar usuário!')
    }
  }

  return (
    <>
      <Helmet title="Cadastro" />
      <div className="p-8">
        <Button variant="secondary" className="absolute right-8 top-8" asChild>
          <Link to="/sign-in">
            <LogIn className="h-5 w-5" />
            <span className="ml-2">Fazer login</span>
          </Link>
        </Button>

        <div className="flex w-[350px] flex-col justify-center gap-6">
          <div className="flex flex-col gap-2 text-center">
            <h1 className="text-2xl font-semibold tracking-tight">
              Cadastre-se
            </h1>
            <p className="text-sm text-muted-foreground">
              Preencha seu questionário de saúde e acompanhe seu tratamento!
            </p>
          </div>

          <form onSubmit={handleSubmit(handleSignUp)} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="name">
                <div className="flex items-center space-x-2">
                  <ALargeSmall className="h-5 w-5" />
                  <span>Seu nome</span>
                </div>
              </Label>
              <Input
                id="name"
                type="name"
                placeholder="Seu nome aqui 😍"
                className="w-full rounded-md border border-foreground/5 p-3"
                {...register('name')}
              />
              {errors.name && (
                <small className="text-red-500">{errors.name.message}</small>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">
                <div className="flex items-center space-x-2">
                  <Mail className="h-5 w-5" />
                  <span>Seu e-mail</span>
                </div>
              </Label>
              <Input
                id="email"
                type="email"
                placeholder="Seu e-mail aqui 📧"
                className="w-full rounded-md border border-foreground/5 p-3"
                {...register('email')}
              />
              {errors.email && (
                <small className="text-red-500">{errors.email.message}</small>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="address">
                <div className="flex items-center space-x-2">
                  <MapPin className="h-5 w-5" />
                  <span>Endereço</span>
                </div>
              </Label>
              <Input
                id="address"
                type="address"
                placeholder="Rua, número, bairro, complemento"
                className="w-full rounded-md border border-foreground/5 p-3"
                {...register('address')}
              />
              {errors.address && (
                <small className="text-red-500">{errors.address.message}</small>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="birth_date">
                <div className="flex items-center space-x-2">
                  <CalendarHeart className="h-5 w-5" />
                  <span>Data de Nascimento</span>
                </div>
              </Label>
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant={'outline'}
                    className={cn(
                      'w-[350px] justify-start text-left font-normal',
                      !date && 'text-muted-foreground',
                    )}
                  >
                    {date ? (
                      format(date, 'PPP', { locale: ptBR })
                    ) : (
                      <span>Escolha uma data</span>
                    )}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0">
                  <Calendar
                    mode="single"
                    captionLayout="dropdown-buttons"
                    required
                    selected={date}
                    onSelect={setDate}
                    fromYear={1940}
                    toYear={new Date().getFullYear()}
                    locale={ptBR}
                  />
                </PopoverContent>
              </Popover>
            </div>

            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <Blend className="h-5 w-5" />
                <span>Estado Civil</span>
              </div>
              <Controller
                name="marital_status"
                control={control}
                render={({ field }) => (
                  <RadioGroup
                    {...field}
                    defaultValue="Married"
                    aria-labelledby="marital_status"
                    onValueChange={field.onChange}
                    value={field.value}
                    className="flex items-center"
                    // {...register('marital_status')}
                  >
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="Married" id="Married" />
                      <Label htmlFor="Married">Casada(o)</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="Single" id="Single" />
                      <Label htmlFor="Single">Solteira(o)</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="Divorced" id="Divorced" />
                      <Label htmlFor="Divorced">Divorciada(o)</Label>
                    </div>
                  </RadioGroup>
                )}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="phone">
                <div className="flex items-center space-x-2">
                  <Smartphone className="h-5 w-5" />
                  <span>Telefone</span>
                </div>
              </Label>
              <Input
                id="phone"
                type="phone"
                placeholder="Formato: (21)99999-9999"
                className="w-full rounded-md border border-foreground/5 p-3"
                {...register('phone')}
              />
              {errors.phone && (
                <small className="text-red-500">{errors.phone.message}</small>
              )}
            </div>

            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <ArrowUpDown className="h-5 w-5" />
                <span>Sexo</span>
              </div>
              <Controller
                name="gender"
                control={control}
                render={({ field }) => (
                  <RadioGroup
                    {...field}
                    defaultValue="Female"
                    aria-labelledby="gender"
                    onValueChange={field.onChange}
                    value={field.value}
                    className="flex items-center"
                    // {...register('gender')}
                  >
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="Female" id="Female" />
                      <Label htmlFor="Female">Feminino</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="Male" id="Male" />
                      <Label htmlFor="Male">Masculino</Label>
                    </div>
                  </RadioGroup>
                )}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="password">
                <div className="flex items-center space-x-2">
                  <Lock className="h-5 w-5" />
                  <span>Sua senha</span>
                </div>
              </Label>
              <Input
                id="password"
                type="password"
                placeholder="Senha com pelo menos 6 caracteres"
                className="w-full rounded-md border border-foreground/5 p-3"
                {...register('password')}
              />
              {errors.password && (
                <small className="text-red-500">
                  {errors.password.message}
                </small>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="password_confirmation">
                <div className="flex items-center space-x-2">
                  <Lock className="h-5 w-5" />
                  <span>Confirme sua senha</span>
                </div>
              </Label>
              <Input
                id="password_confirmation"
                type="password"
                placeholder="Digite a senha novamente"
                className="w-full rounded-md border border-foreground/5 p-3"
                {...register('password_confirmation')}
              />
              {errors.password_confirmation && (
                <small className="text-red-500">
                  {errors.password_confirmation.message}
                </small>
              )}
            </div>

            <Button disabled={isSubmitting} type="submit" className="w-full">
              Finalizar Cadastro
            </Button>
          </form>
        </div>
      </div>
    </>
  )
}
