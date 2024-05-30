import { PrismaClientsRepository } from '@/repositories/prisma/prisma-clients-repository'
import { PrismaSkinAnalysisRepository } from '@/repositories/prisma/prisma-skin-analysis-repository'
import { UpdateSkinFormService } from '../update-skin-form-service'

export function makeSkinFormUpdateService(): UpdateSkinFormService {
  const skinAnalysisRepository = new PrismaSkinAnalysisRepository()
  const clientsRepository = new PrismaClientsRepository()
  const skinFormUpdateService = new UpdateSkinFormService(skinAnalysisRepository, clientsRepository)

  return skinFormUpdateService
}
