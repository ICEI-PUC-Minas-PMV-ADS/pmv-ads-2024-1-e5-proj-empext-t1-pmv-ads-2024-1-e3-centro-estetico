import { PrismaSkinAnalysisRepository } from '@/repositories/prisma/prisma-skin-analysis-repository'
import { UpdateSkinFormService } from '../update-skin-form-service'

export function makeSkinFormUpdateService(): UpdateSkinFormService {
  const skinAnalysisRepository = new PrismaSkinAnalysisRepository()
  const skinFormUpdateService = new UpdateSkinFormService(skinAnalysisRepository)

  return skinFormUpdateService
}
