// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import { FastifyReply, FastifyRequest } from 'fastify'
import { makeGetUserProfileService } from '@/services/factories/make-get-user-profile-service'
import { ZodError } from 'zod'

export async function userProfile(
  request: FastifyRequest,
  reply: FastifyReply,
) {
  const userProfile = makeGetUserProfileService()

  try {
    const userId = request.user.id
    const { user } = await userProfile.execute({ userId })

    if(user) {
      return reply.code(200).send(user)
    } else {
      return reply.code(404).send({message: 'Não encontrado'})
    }

  } catch (error) {
    if (error instanceof ZodError)
    {
      return reply.code(403).send({ error: error.format() })
    }
    console.log(error)
    return reply.code(500).send({ error: 'Internal Server Error' })
  }
}
