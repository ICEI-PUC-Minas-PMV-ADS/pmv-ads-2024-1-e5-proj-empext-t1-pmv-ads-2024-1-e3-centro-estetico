import { PrismaUsersRepository } from '@/repositories/prisma/prisma-users-repository'
import { UserRegisterService } from '@/services/user-register-service'

export function makeUserRegisterService(): UserRegisterService {
  const usersRepository = new PrismaUsersRepository()
  const userRegisterService = new UserRegisterService(usersRepository)

  return userRegisterService
}
