import { PrismaClientsRepository } from '@/repositories/prisma/prisma-clients-repository'
import { PrismaSkinAnalysisRepository } from '@/repositories/prisma/prisma-skin-analysis-repository'
import { PostSkinFormService } from '@/services/post-skin-form-service'

export function makeSkinFormRegisterService(): PostSkinFormService {
  const skinAnalysisRepository = new PrismaSkinAnalysisRepository()
  const clientsRepository = new PrismaClientsRepository()
  const skinFormRegisterService = new PostSkinFormService(skinAnalysisRepository, clientsRepository)

  return skinFormRegisterService
}
