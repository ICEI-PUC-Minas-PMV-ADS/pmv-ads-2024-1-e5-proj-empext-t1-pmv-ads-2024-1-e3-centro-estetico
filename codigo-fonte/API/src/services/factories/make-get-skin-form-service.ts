import { PrismaSkinAnalysisRepository } from '@/repositories/prisma/prisma-skin-analysis-repository'
import { GetSkinFormService } from '../get-skin-form-service'

export function makeGetSkinFormService(): GetSkinFormService {
  const skinFormRepository = new PrismaSkinAnalysisRepository()
  const getSkinFormService = new GetSkinFormService(skinFormRepository)

  return getSkinFormService
}
