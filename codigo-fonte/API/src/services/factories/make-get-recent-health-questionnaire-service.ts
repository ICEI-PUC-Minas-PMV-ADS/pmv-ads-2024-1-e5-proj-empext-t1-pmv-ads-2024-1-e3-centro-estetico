import { PrismaHealthQuestionnairiesRepository } from '@/repositories/prisma/prisma-health-questionnairies-repository'
import { GetRecentHealthQuestionnaireService } from '@/services/get-recent-health-questionnaire'

export function makeGetRecentHealthQuestionnaireService(): GetRecentHealthQuestionnaireService {
  const healthquestionnaireRepository = new PrismaHealthQuestionnairiesRepository()
  const authenticateService = new GetRecentHealthQuestionnaireService(healthquestionnaireRepository)

  return authenticateService
}
