import { HealthQuestionnaire, Prisma } from '@prisma/client'

export interface IHealthQuestionnairiesRepository {
  create(data: Prisma.HealthQuestionnaireCreateInput): Promise<HealthQuestionnaire>;
  findByClientId(client_id: string): Promise<HealthQuestionnaire | null>;
}