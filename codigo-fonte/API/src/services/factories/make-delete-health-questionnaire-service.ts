import { PrismaHealthQuestionnairiesRepository } from '@/repositories/prisma/prisma-health-questionnairies-repository'
import { DeleteHealthQuestionnaireService } from '@/services/delete-health-questionnaire-service'

export function makeDeleteHealthQuestionnaireService(): DeleteHealthQuestionnaireService {
  const healthQuestionnaireRepository = new PrismaHealthQuestionnairiesRepository()
  const authenticateService = new DeleteHealthQuestionnaireService(healthQuestionnaireRepository)

  return authenticateService
}
