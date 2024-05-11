import { FastifyReply, FastifyRequest } from 'fastify'
import { makeGetUserProfileService } from '@/services/factories/make-get-user-profile-service'
import { getUsersParams } from '@/validations/user-validation'

export async function userProfile(
  request: FastifyRequest,
  reply: FastifyReply,
) {
  const userProfile = makeGetUserProfileService()

  try {
    const userId = getUsersParams.parse(request.query)

    const { user } = await userProfile.execute({ userId: userId.id })
  
    if(user) {
      return reply.code(200).send(user)
    } else {
      return reply.code(404).send({message: 'Não encontrado'})
    }

  } catch (error) {
    console.log(error)
    return reply.code(500).send({ error: 'Internal Server Error' })
  }
}
