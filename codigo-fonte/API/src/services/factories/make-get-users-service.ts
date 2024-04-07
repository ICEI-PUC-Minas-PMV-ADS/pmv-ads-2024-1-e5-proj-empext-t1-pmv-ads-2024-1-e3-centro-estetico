import { PrismaUsersRepository } from '@/repositories/prisma/prisma-users-repository'
import { GetUsersService } from '@/services/get-users-service'

export function makeGetUsersService(): GetUsersService {
  const usersRepository = new PrismaUsersRepository()
  const authenticateService = new GetUsersService(usersRepository)

  return authenticateService
}
