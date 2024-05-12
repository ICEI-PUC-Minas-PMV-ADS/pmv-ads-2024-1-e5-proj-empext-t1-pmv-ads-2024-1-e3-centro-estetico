import { FastifyReply, FastifyRequest } from 'fastify'
import { UserAlreadyExistsError } from '@/services/errors/user-already-exists-error'
import { questionaryBodySchema } from '@/validations/health-questionnaire-validation'
import { makeCreateHealthQuestionnaireService } from '@/services/factories/make-create-health-questionnaire-service'

export async function createHealthQuestionnaire(
  request: FastifyRequest,
  reply: FastifyReply,
) {
  const healthInputData = questionaryBodySchema.parse(request.body)

  try {
    const createHealthQuestionnaireService = makeCreateHealthQuestionnaireService()
    const serviceResponse = await createHealthQuestionnaireService.execute(healthInputData)

    return reply.code(201).send(serviceResponse)
  } catch (error) {
    request.log.error(error)

    if (error instanceof UserAlreadyExistsError) {
      return reply.code(409).send({ message: error.message })
    }

    return reply.code(500).send({ error: 'Internal Server Error' })
  }
}
