import { ClientAlreadyExistsError } from '@/services/errors/client-already-exists-error'
import { makeClientRegisterService } from '@/services/factories/make-client-register-service'
import { registerBodySchema } from '@/validations/client-validation'
import { FastifyReply, FastifyRequest } from 'fastify'

export async function clientRegister(
  request: FastifyRequest,
  reply: FastifyReply,
) {

  const clientInputData = registerBodySchema.parse(request.body)

  try {
    const clientRegisterService = makeClientRegisterService()
    const serviceResponse = await clientRegisterService.execute(clientInputData)

    return reply.code(201).send(serviceResponse)
  } catch (error) {
    request.log.error(error)

    if (error instanceof ClientAlreadyExistsError) {
      return reply.code(409).send({ message: error.message })
    }

    return reply.code(500).send({ error: 'Internal Server Error' })
  }
}
