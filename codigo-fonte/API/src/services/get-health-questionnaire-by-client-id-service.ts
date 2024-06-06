import { IHealthQuestionnairiesRepository } from "@/repositories/interfaces/ihealth-questionnairies-repository";
import { ResourceNotFoundError } from './errors/resource-not-found-error';
import { HealthQuestionnaire } from '@prisma/client';

export interface GetHealthQuestionnaireByClientIdServiceRequest {
  client_id: string;
}

interface GetHealthQuestionnaireByClientIdServiceResponse {
  healthQuestionnaire: HealthQuestionnaire;
}

export class GetHealthQuestionnaireByClientIdService {
  constructor(private healthQuestionnairiesRepository: IHealthQuestionnairiesRepository) {}

  async execute({
    client_id,
  }: GetHealthQuestionnaireByClientIdServiceRequest): Promise<GetHealthQuestionnaireByClientIdServiceResponse> {
    const healthQuestionnaire = await this.healthQuestionnairiesRepository.findByClientId(client_id);
    if (!healthQuestionnaire) throw new ResourceNotFoundError();

    return {
      healthQuestionnaire,
    };
  }
}

