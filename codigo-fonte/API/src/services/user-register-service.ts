import { IUsersRepository } from '@/repositories/interfaces/iusers-repository'
import { hashPassword } from '@/utils/hash-password'

type UserRegisterServiceType = {
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

export class UserRegisterService {
  constructor(private usersRepository: IUsersRepository) {}

  async execute(userInputData: UserRegisterServiceType) {
    const { password, ...userInputWithoutPassword } = userInputData

    const password_hash = await hashPassword(password)
    const userData = { ...userInputWithoutPassword, password_hash }

    await this.usersRepository.create(userData)

    return { message: 'User created successfully' }
  }
}
