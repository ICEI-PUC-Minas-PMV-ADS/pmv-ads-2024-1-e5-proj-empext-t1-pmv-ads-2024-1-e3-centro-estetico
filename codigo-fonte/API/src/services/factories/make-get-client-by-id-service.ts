import { PrismaClientsRepository } from '@/repositories/prisma/prisma-clients-repository'
import { GetClientById } from '@/services/get-clients-service'

export function makeGetClientByIdService(): GetClientById {
  const clientsRepository = new PrismaClientsRepository()
  const authenticateService = new GetClientById(clientsRepository)

  return authenticateService
}
