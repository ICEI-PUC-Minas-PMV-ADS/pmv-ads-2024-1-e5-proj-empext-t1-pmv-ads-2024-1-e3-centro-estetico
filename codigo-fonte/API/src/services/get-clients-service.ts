import { IClientsRepository } from '@/repositories/interfaces/iclients-repository'
import { ResourceNotFoundError } from './errors/resource-not-found-error'

export interface GetClientsServiceRequest {
  username: string
}

export interface GetClientByIdServiceRequest {
  id: string
}

type client = {
  id: string
  name: string
  email: string
}

interface GetClientByIdServiceResponse {
  client: client
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

export class GetClientById {
  constructor(private clientsRepository: IClientsRepository) {}

  async execute({
    id,
  }: GetClientByIdServiceRequest): Promise<GetClientByIdServiceResponse> {
    const clientResponse = await this.clientsRepository.findById(id)
    if (!clientResponse) throw new ResourceNotFoundError()

    return {
      client: clientResponse
    }
  }
}
