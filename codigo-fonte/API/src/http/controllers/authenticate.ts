import { FastifyReply, FastifyRequest } from 'fastify'
import { authenticateBodySchema } from '@/validations/authentication-validation'
import { InvalidCredentialsError } from '@/services/errors/invalid-credentials-error'
import { makeAuthenticateService } from '@/services/factories/make-authenticate-service'
import { env } from '@/env'

export async function authenticate(
  request: FastifyRequest,
  reply: FastifyReply,
) {
  const userInputData = authenticateBodySchema.parse(request.body)

  try {
    const authenticateService = makeAuthenticateService()
    const {
      user: { id },
    } = await authenticateService.execute(userInputData)

    const token = await generateJwtToken(reply, id)

    setCookie(reply, token)

    return reply.code(202).send({ message: 'Authentication successful' })
  } catch (error) {
    request.log.error(error)

    if (error instanceof InvalidCredentialsError) {
      return reply.code(401).send({ message: error.message })
    }

    return reply.code(500).send({ error: 'Internal Server Error' })
  }
}

async function generateJwtToken(reply: FastifyReply, userId: string) {
  return await reply.jwtSign(
    {},
    {
      sign: {
        sub: userId,
        expiresIn: '7d',
      },
    },
  )
}

function setCookie(reply: FastifyReply, token: string) {
  return reply.setCookie('auth', token, {
    path: '/',
    httpOnly: true,
    secure: env.NODE_ENV === 'production',
    sameSite: 'lax',
  })
}
