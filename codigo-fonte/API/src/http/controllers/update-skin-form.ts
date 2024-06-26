import { makeSkinFormUpdateService } from '@/services/factories/make-skin-form-update-service'
import { getSkinFormIdParams, registerBodySchema } from '@/validations/skin-form-validation'
import { FastifyReply, FastifyRequest } from 'fastify'

export async function updateSkinForm(
  request: FastifyRequest,
  reply: FastifyReply,
) {
  const params = getSkinFormIdParams.parse(request.query)

  const skinFormInputData = registerBodySchema.parse(request.body)

  try {
    const skinFormUpdateService = makeSkinFormUpdateService()
    const serviceResponse = await skinFormUpdateService.execute(skinFormInputData, params.skinAnalysisId)

    return reply.code(201).send(serviceResponse)
  } catch (error) {
    request.log.error(error)

    return reply.code(500).send({ error: 'Internal Server Error' })
  }
}
