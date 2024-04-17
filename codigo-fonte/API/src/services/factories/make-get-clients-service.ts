import { PrismaClientsRepository } from '@/repositories/prisma/prisma-clients-repository'
import { GetClientsService } from '@/services/get-clients-service'

export function makeGetClientsService(): GetClientsService {
  const clientsRepository = new PrismaClientsRepository()
  const authenticateService = new GetClientsService(clientsRepository)

  return authenticateService
}
