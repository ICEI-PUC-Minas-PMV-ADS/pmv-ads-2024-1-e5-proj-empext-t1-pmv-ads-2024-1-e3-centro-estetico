import { FastifyReply, FastifyRequest } from 'fastify'
import { ResourceNotFoundError } from '@/services/errors/resource-not-found-error'
import { getUserBodySchema } from '@/validations/get-user-validation'
import { makeGetUserService } from '@/services/factories/make-get-users-service'

export async function getUsers(
  request: FastifyRequest,
  reply: FastifyReply,
) {

  const getUserInputData = getUserBodySchema.parse(request.query)

  try {
    const getUserServiceService = makeGetUserService()
    const serviceResponse = await getUserServiceService.execute(getUserInputData)

    return reply.code(201).send(serviceResponse)
  } catch (error) {
    request.log.error(error)

    if (error instanceof ResourceNotFoundError) {
      return reply.code(409).send({ message: error.message })
    }

    return reply.code(500).send({ error: 'Internal Server Error' })
  }
}
