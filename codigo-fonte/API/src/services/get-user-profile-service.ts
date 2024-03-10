import { IUsersRepository } from '@/repositories/interfaces/iusers-repository'
import { compare } from 'bcryptjs'
import { ResourceNotFoundError } from './errors/resource-not-found-error'

export interface GetUserProfileServiceRequest {
  userId: string
}

type user = {
  id: string
  name: string
  email: string
}

interface GetUserProfileServiceResponse {
  user: user
  message: string
}

export class GetUserProfileService {
  constructor(private usersRepository: IUsersRepository) {}

  async execute({
    userId,
  }: GetUserProfileServiceRequest): Promise<GetUserProfileServiceResponse> {
    const user = await this.usersRepository.findById(userId)
    if (!user) throw new ResourceNotFoundError()

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
