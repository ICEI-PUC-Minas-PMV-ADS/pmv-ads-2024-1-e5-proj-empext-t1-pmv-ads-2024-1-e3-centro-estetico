import { IHealthQuestionnairiesRepository } from "@/repositories/interfaces/ihealth-questionnairies-repository";
import { ResourceNotFoundError } from './errors/resource-not-found-error';
import { HealthQuestionnaire } from '@prisma/client';

export interface DeleteHealthQuestionnaireServiceRequest {
  client_id: string;
}

interface DeleteHealthQuestionnaireServiceResponse {
  healthQuestionnaire: HealthQuestionnaire;
}

export class DeleteHealthQuestionnaireService {
  constructor(private healthQuestionnairiesRepository: IHealthQuestionnairiesRepository) {}

  async execute({
    client_id,
  }: DeleteHealthQuestionnaireServiceRequest): Promise<DeleteHealthQuestionnaireServiceResponse> {
    const healthQuestionnaire = await this.healthQuestionnairiesRepository.delete(client_id);
    if (!healthQuestionnaire) throw new ResourceNotFoundError();

    return {
      healthQuestionnaire: healthQuestionnaire,
    };
  }
}

