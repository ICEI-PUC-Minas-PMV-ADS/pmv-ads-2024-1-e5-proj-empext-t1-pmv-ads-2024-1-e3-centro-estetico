import { HealthQuestionnaire, Prisma } from '@prisma/client'

export interface IHealthQuestionnairiesRepository {
  create(data: Prisma.HealthQuestionnaireCreateInput): Promise<HealthQuestionnaire>
}
