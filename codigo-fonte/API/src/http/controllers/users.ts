import { FastifyReply, FastifyRequest } from 'fastify'
import { makeGetUsersService } from '@/services/factories/make-get-users-service'
import { getUsersParams } from '@/validations/user-validation'

export async function users(
  request: FastifyRequest,
  reply: FastifyReply,
) {
  const userProfile = makeGetUsersService()

  try {
    const username = getUsersParams.parse(request.query)

    const { users } = await userProfile.execute({ username: username.username })
  
    if(users.length > 0) {
      return reply.code(200).send(users)
    } else {
      return reply.code(404).send({message: 'Não encontrado'})
    }

  } catch (error) {
    return reply.code(500).send({ error: 'Internal Server Error' })
  }
}
