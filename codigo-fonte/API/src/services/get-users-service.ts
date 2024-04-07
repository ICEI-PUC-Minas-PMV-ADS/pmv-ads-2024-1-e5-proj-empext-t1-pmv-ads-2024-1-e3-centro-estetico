import { IUsersRepository } from '@/repositories/interfaces/iusers-repository'
import { ResourceNotFoundError } from './errors/resource-not-found-error'

export interface GetUsersServiceRequest {
  username: string
}

type user = {
  id: string
  name: string
  email: string
}

interface GetUsersServiceResponse {
  users: user[]
}

export class GetUsersService {
  constructor(private usersRepository: IUsersRepository) {}

  async execute({
    username,
  }: GetUsersServiceRequest): Promise<GetUsersServiceResponse> {
    const users = await this.usersRepository.findByName(username)
    if (!users) throw new ResourceNotFoundError()

    return {
      users: users
    }
  }
}
