import { PrismaHealthQuestionnairiesRepository } from '@/repositories/prisma/prisma-health-questionnairies-repository'
import { GetHealthQuestionnaireByClientIdService } from '@/services/get-health-questionnaire-by-client-id-service'

export function makeGetHealthQuestionnaireByClientIdService(): GetHealthQuestionnaireByClientIdService {
  const healthquestionnaireRepository = new PrismaHealthQuestionnairiesRepository()
  const authenticateService = new GetHealthQuestionnaireByClientIdService(healthquestionnaireRepository)

  return authenticateService
}
