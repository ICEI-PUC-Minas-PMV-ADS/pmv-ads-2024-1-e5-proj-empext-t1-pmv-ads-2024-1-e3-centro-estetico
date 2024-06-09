import { FastifyReply, FastifyRequest } from 'fastify'
import { ResourceNotFoundError } from '@/services/errors/resource-not-found-error'
import { getClientsParamsById } from '@/validations/client-validation'
import { makeGetClientHealthQuestionnaireLinkService } from '@/services/factories/make-get-health-questionnaire-service'

export async function getHealthQuestionnaireLink(
  request: FastifyRequest,
  reply: FastifyReply,
) {
  const { id } = getClientsParamsById.parse(request.params)

  try {
    const getClientHealthQuestionnaireLinkService = makeGetClientHealthQuestionnaireLinkService()
    const serviceResponse = await getClientHealthQuestionnaireLinkService.execute({ id })

    return reply.code(200).send(serviceResponse)
  } catch (error) {
    if (error instanceof ResourceNotFoundError) {
      return reply.code(404).send({ message: error.message })
    }

    return reply.code(500).send({ error: 'Internal Server Error' })
  }
}

