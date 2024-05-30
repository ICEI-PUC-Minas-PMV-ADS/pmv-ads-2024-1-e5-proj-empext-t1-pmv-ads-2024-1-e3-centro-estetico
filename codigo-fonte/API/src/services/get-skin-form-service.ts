import { ISkinAnalysisRepository } from '@/repositories/interfaces/iskin-analysis-repository';
import { ResourceNotFoundError } from './errors/resource-not-found-error';

export interface GetSkinFormServiceRequest {
  clientId: string
}

export class GetSkinFormService {
  constructor(private skinAnalysisRepository: ISkinAnalysisRepository) {}

  async execute({
    clientId,
  }: GetSkinFormServiceRequest) {
    if (!clientId) throw new ResourceNotFoundError()
    const skinAnalysisForm = await this.skinAnalysisRepository.findByClientId(clientId)
    if (!skinAnalysisForm) throw new ResourceNotFoundError()

    return skinAnalysisForm

  }
}
