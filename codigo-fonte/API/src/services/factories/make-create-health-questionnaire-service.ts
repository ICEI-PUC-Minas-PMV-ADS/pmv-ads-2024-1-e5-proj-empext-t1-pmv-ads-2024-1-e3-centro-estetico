import { PrismaHealthQuestionnairiesRepository } from '@/repositories/prisma/prisma-health-questionnairies-repository'
import { CreateHealthQuestionnaireService } from '@/services/create-health-questionnaire-service'

export function makeCreateHealthQuestionnaireService(): CreateHealthQuestionnaireService {
  const HealthQuestionnairiesRepository = new PrismaHealthQuestionnairiesRepository()
  const createHealthQuestionnaireService = new CreateHealthQuestionnaireService(HealthQuestionnairiesRepository)

  return createHealthQuestionnaireService
}
