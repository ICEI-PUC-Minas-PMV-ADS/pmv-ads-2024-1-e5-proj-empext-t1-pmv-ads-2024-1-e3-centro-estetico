import { PrismaUsersRepository } from '@/repositories/prisma-users-repository'
import { hash } from 'bcryptjs'

type MaritalStatusType = 'Married' | 'Single' | 'Divorced'
type GenderType = 'Male' | 'Female'
type UserType = 'Admin' | 'Client'

interface UserRegisterService {
  name: string
  birth_date: Date
  address: string
  marital_status: MaritalStatusType
  email: string
  phone: string
  gender: GenderType
  additional_information?: string
  user_type: UserType
  password: string
}

export async function userRegisterService(params: UserRegisterService) {
  const { password, ...userInputWithoutPassword } = params

  const password_hash = await hash(password, 6)
  const userData = { ...userInputWithoutPassword, password_hash }

  const prismaUsersRepository = new PrismaUsersRepository(userData)
  await prismaUsersRepository.create()

  return { message: 'User created successfully' }
}
