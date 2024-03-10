import { FastifyReply, FastifyRequest } from 'fastify'
import { makeGetUserProfileService } from '@/services/factories/make-get-user-profile-service'

export async function userProfile(
  request: FastifyRequest,
  reply: FastifyReply,
) {
  const userProfile = makeGetUserProfileService()

  const { user } = await userProfile.execute({ userId: request.user.sub })

  return reply.code(200).send(user)
}
