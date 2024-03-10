import { FastifyReply, FastifyRequest } from 'fastify'
import { authenticateBodySchema } from '@/validations/authentication-validation'
import { InvalidCredentialsError } from '@/services/errors/invalid-credentials-error'
import { makeAuthenticateService } from '@/services/factories/make-authenticate-service'

export async function authenticate(
  request: FastifyRequest,
  reply: FastifyReply,
) {
  const userInputData = authenticateBodySchema.parse(request.body)

  try {
    const authenticateService = makeAuthenticateService()
    const { user } = await authenticateService.execute(userInputData)

    const token = await reply.jwtSign(
      {},
      {
        sign: {
          sub: user.id,
        },
      },
    )

    return reply.code(202).send({
      token,
    })
  } catch (error) {
    request.log.error(error)

    if (error instanceof InvalidCredentialsError) {
      return reply.code(401).send({ message: error.message })
    }

    return reply.code(500).send({ error: 'Internal Server Error' })
  }
}
