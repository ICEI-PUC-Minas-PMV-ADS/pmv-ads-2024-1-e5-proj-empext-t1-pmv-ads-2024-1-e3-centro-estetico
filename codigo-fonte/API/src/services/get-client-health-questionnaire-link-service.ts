import { IClientsRepository } from "@/repositories/interfaces/iclients-repository";
import { ResourceNotFoundError } from "./errors/resource-not-found-error";
import { env } from "@/env";

export interface ServiceRequest {
  id: string
}

export interface ServiceResponse {
  link: string
}

export class GetClientHealthQuestionnaireLinkService {
  constructor(private clientsRepository: IClientsRepository) {}

  async execute({ id }: ServiceRequest): Promise<ServiceResponse> {
    const client = await this.clientsRepository.findById(id)
    if (!client) throw new ResourceNotFoundError()

    return {
      link: `${env.CLIENT_URL}/perfil-users/${client.id}/questionary`,
    }
  }
}
