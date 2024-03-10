import { PrismaUsersRepository } from '@/repositories/prisma/prisma-users-repository'
import { GetUserProfileService } from '@/services/get-user-profile-service'

export function makeGetUserProfileService(): GetUserProfileService {
  const usersRepository = new PrismaUsersRepository()
  const authenticateService = new GetUserProfileService(usersRepository)

  return authenticateService
}
