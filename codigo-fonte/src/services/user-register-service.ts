import { prisma } from '@/lib/prisma'
import { hash } from 'bcryptjs'

type MaritalStatusType = 'Married' | 'Single' | 'Divorced'
type GenderType = 'Male' | 'Female'
type UserType = 'Admin' | 'Client'

interface UserRegisterService {
  name: string
  birth_date: Date
  address: string
  marital_status: MaritalStatusType
  email?: string
  phone: string
  gender: GenderType
  additional_information?: string
  user_type: UserType
  password: string
}

export async function userRegisterService(params: UserRegisterService) {
  const { password, ...userInputWithoutPassword } = params

  const userExists = await prisma.user.findUnique({
    where: {
      email: userInputWithoutPassword.email,
    },
  })

  if (userExists) {
    throw new Error('User already exists')
  }

  const password_hash = await hash(password, 6)

  const userData = { ...userInputWithoutPassword, password_hash }

  await prisma.user.create({
    data: userData,
  })

  return { message: 'User created successfully' }
}
