import { PrismaUsersRepository } from '@/repositories/prisma/prisma-users-repository'
import { GetEstheticianService } from '@/services/get-esthetician-service'

export function makeGetEstheticianService(): GetEstheticianService {
  const estheticiansRepository = new PrismaUsersRepository()
  const authenticateService = new GetEstheticianService(estheticiansRepository)

  return authenticateService
}
