import { IHealthQuestionnairiesRepository } from "@/repositories/interfaces/ihealth-questionnairies-repository";
import { ResourceNotFoundError } from './errors/resource-not-found-error';
import { HealthQuestionnaire } from '@prisma/client';

export interface GetRecentHealthQuestionnaireServiceRequest {
  days: number;
}

interface GetRecentHealthQuestionnairiesServiceResponse {
  healthQuestionnairies: HealthQuestionnaire[];
}

export class GetRecentHealthQuestionnaireService {
  constructor(private healthQuestionnairiesRepository: IHealthQuestionnairiesRepository) {}

  async execute({
    days,
  }: GetRecentHealthQuestionnaireServiceRequest): Promise<GetRecentHealthQuestionnairiesServiceResponse> {
    const healthQuestionnairies = await this.healthQuestionnairiesRepository.findRecentQuestionnaires(days);
    if (!healthQuestionnairies) throw new ResourceNotFoundError();

    return {
      healthQuestionnairies
    };
  }
}

