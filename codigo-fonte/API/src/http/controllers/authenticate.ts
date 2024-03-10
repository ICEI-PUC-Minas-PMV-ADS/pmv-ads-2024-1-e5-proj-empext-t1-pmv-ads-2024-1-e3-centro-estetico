import { FastifyReply, FastifyRequest } from 'fastify'
import { PrismaUsersRepository } from '@/repositories/prisma/prisma-users-repository'
import { authenticateBodySchema } from '@/validations/authentication-validation'
import { AuthenticateService } from '@/services/authenticate-service'
import { InvalidCredentialsError } from '@/services/errors/invalid-credentials-error'

export async function authenticate(
  request: FastifyRequest,
  reply: FastifyReply,
) {
  const userInputData = authenticateBodySchema.parse(request.body)

  try {
    const usersRepository = new PrismaUsersRepository()
    const authenticateService = new AuthenticateService(usersRepository)
    await authenticateService.execute(userInputData)

    return reply.code(202).send()
  } catch (error) {
    request.log.error(error)

    if (error instanceof InvalidCredentialsError) {
      return reply.code(401).send({ message: error.message })
    }

    return reply.code(500).send({ error: 'Internal Server Error' })
  }
}
