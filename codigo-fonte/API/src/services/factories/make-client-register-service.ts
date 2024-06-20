import { PrismaClientsRepository } from '@/repositories/prisma/prisma-clients-repository'
import { ClientRegisterService } from '@/services/client-register-service'

export function makeClientRegisterService(): ClientRegisterService {
  const clientsRepository = new PrismaClientsRepository()
  const clientRegisterService = new ClientRegisterService(clientsRepository)

  return clientRegisterService
}
