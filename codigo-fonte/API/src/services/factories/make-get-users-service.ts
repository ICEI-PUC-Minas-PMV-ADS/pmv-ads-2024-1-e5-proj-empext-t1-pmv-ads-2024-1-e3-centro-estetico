import { PrismaUsersRepository } from '@/repositories/prisma/prisma-users-repository'
import { GetUsersService } from '@/services/get-users-service'

export function makeGetUserService(): GetUsersService {
  const usersRepository = new PrismaUsersRepository()
  const getUsersService = new GetUsersService(usersRepository)

  return getUsersService
}
