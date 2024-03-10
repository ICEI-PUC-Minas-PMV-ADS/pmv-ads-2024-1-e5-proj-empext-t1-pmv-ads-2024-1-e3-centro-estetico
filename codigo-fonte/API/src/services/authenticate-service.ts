import { IUsersRepository } from '@/repositories/interfaces/iusers-repository'
import { InvalidCredentialsError } from './errors/invalid-credentials-error'
import { compare } from 'bcryptjs'

export interface AuthenticateServiceRequest {
  email: string
  password: string
}

type user = {
  id: string
  name: string
  email: string
}

interface AuthenticateServiceResponse {
  user: user
  message: string
}

export class AuthenticateService {
  constructor(private usersRepository: IUsersRepository) {}

  async execute({
    email,
    password,
  }: AuthenticateServiceRequest): Promise<AuthenticateServiceResponse> {
    const user = await this.usersRepository.findByEmail(email)
    if (!user) throw new InvalidCredentialsError()

    const doesPasswordMatches = await compare(password, user.password_hash)
    if (!doesPasswordMatches) throw new InvalidCredentialsError()

    return {
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
      },
      message: 'User authenticated successfully',
    }
  }
}
