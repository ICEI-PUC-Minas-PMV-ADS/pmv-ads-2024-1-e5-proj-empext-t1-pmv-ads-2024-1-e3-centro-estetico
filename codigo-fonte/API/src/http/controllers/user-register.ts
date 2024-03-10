import { FastifyReply, FastifyRequest } from 'fastify'
import { UserAlreadyExistsError } from '@/services/errors/user-already-exists-error'
import { registerBodySchema } from '@/validations/user-validation'
import { makeUserRegisterService } from '@/services/factories/make-user-register-service'

export async function userRegister(
  request: FastifyRequest,
  reply: FastifyReply,
) {
  const userInputData = registerBodySchema.parse(request.body)

  try {
    const userRegisterService = makeUserRegisterService()
    const serviceResponse = await userRegisterService.execute(userInputData)

    return reply.code(201).send(serviceResponse)
  } catch (error) {
    request.log.error(error)

    if (error instanceof UserAlreadyExistsError) {
      return reply.code(409).send({ message: error.message })
    }

    return reply.code(500).send({ error: 'Internal Server Error' })
  }
}
