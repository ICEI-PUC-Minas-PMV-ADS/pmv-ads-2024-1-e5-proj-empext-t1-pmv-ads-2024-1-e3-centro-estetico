import { PrismaClientsRepository } from '@/repositories/prisma/prisma-clients-repository'
import { PrismaUsersRepository } from '@/repositories/prisma/prisma-users-repository'
import { ClientRegisterService } from '@/services/client-register-service'

export function makeClientRegisterService(): ClientRegisterService {
  const clientsRepository = new PrismaClientsRepository()
  const usersRepository = new PrismaUsersRepository()
  const clientRegisterService = new ClientRegisterService(clientsRepository, usersRepository)

  return clientRegisterService
}
