import { IUsersRepository } from '@/repositories/interfaces/iusers-repository'
import { hashPassword } from '@/utils/hash-password'
import { registerBodySchema } from '@/validations/user-validation'

export type UserRegisterServiceType = {
  name: string
  birth_date: Date
  address: string
  marital_status: 'Married' | 'Single' | 'Divorced'
  email: string
  phone: string
  gender: 'Male' | 'Female'
  additional_information?: string
  user_type: 'Admin' | 'Client'
  password: string
}

interface IUserRegisterService {
  execute: (
    userInputData: UserRegisterServiceType,
  ) => Promise<{ message: string }>
}

export class UserRegisterService implements IUserRegisterService {
  constructor(private usersRepository: IUsersRepository) {}

  async execute(userInputData: UserRegisterServiceType) {
    const userData = await this.buildUserData(
      registerBodySchema.parse(userInputData),
    )

    await this.usersRepository.create(userData)

    return { message: 'User created successfully' }
  }

  async buildUserData(userInputData: UserRegisterServiceType) {
    const { password, ...userInputWithoutPassword } = userInputData

    const password_hash = await hashPassword(password)
    const userData = { ...userInputWithoutPassword, password_hash }

    return userData
  }
}
