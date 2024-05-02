import { SkinAnalysisAlreadyExistsError } from '@/services/errors/skin-analysis-already-exists-error'
import { makeSkinFormRegisterService } from '@/services/factories/make-skin-form-register-service'
import { getSkinFormParams, registerBodySchema } from '@/validations/skin-form-validation'
import { FastifyReply, FastifyRequest } from 'fastify'

export async function skinForm(
  request: FastifyRequest,
  reply: FastifyReply,
) {
  const params = getSkinFormParams.parse(request.query)

  const skinFormInputData = registerBodySchema.parse(request.body)

  try {
    const skinFormRegisterService = makeSkinFormRegisterService()
    const serviceResponse = await skinFormRegisterService.execute(skinFormInputData, params.clientId)

    return reply.code(201).send(serviceResponse)
  } catch (error) {
    request.log.error(error)

    if (error instanceof SkinAnalysisAlreadyExistsError) {
      return reply.code(409).send({ message: error.message })
    }

    return reply.code(500).send({ error: 'Internal Server Error' })
  }
}
