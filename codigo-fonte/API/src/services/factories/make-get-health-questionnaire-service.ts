import { PrismaClientsRepository } from '@/repositories/prisma/prisma-clients-repository'
import { GetClientHealthQuestionnaireLinkService } from '@/services/get-client-health-questionnaire-link-service'

export function makeGetClientHealthQuestionnaireLinkService(): GetClientHealthQuestionnaireLinkService {
  const clientsRepository = new PrismaClientsRepository()
  const service = new GetClientHealthQuestionnaireLinkService(clientsRepository)

  return service
}
