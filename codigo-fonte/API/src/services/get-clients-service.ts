import { IClientsRepository } from '@/repositories/interfaces/iclients-repository'
import { ResourceNotFoundError } from './errors/resource-not-found-error'

export interface GetClientsServiceRequest {
  username: string
}

type client = {
  id: string
  name: string
  email: string
}

interface GetClientsServiceResponse {
  clients: client[]
}

export class GetClientsService {
  constructor(private clientsRepository: IClientsRepository) {}

  async execute({
    username,
  }: GetClientsServiceRequest): Promise<GetClientsServiceResponse> {
    const clients = await this.clientsRepository.findByName(username)
    if (!clients) throw new ResourceNotFoundError()

    return {
      clients: clients
    }
  }
}
