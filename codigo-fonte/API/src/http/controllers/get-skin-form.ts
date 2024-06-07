import { ResourceNotFoundError } from '@/services/errors/resource-not-found-error'
import { makeGetSkinFormService } from '@/services/factories/make-get-skin-form-service'
import { getSkinFormParams } from '@/validations/skin-form-validation'
import { FastifyReply, FastifyRequest } from 'fastify'

export async function getSkinForm(
  request: FastifyRequest,
  reply: FastifyReply,
) {

  const getSkinFormData = getSkinFormParams.parse(request.query)

  try {
    const geSkinFormService = makeGetSkinFormService()
    const serviceResponse = await geSkinFormService.execute(getSkinFormData)

    return reply.code(200).send(serviceResponse)
  } catch (error) {
    request.log.error(error)

    if (error instanceof ResourceNotFoundError) {
      return reply.code(404).send({ message: error.message })
    }

    return reply.code(500).send({ error: 'Internal Server Error' })
  }
}
