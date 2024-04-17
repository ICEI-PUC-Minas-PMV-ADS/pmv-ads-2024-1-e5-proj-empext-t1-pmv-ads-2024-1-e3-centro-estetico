import { FastifyReply, FastifyRequest } from 'fastify'
import { makeGetClientsService } from '@/services/factories/make-get-clients-service'
import { getClientsParams } from '@/validations/client-validation'

export async function clients(
  request: FastifyRequest,
  reply: FastifyReply,
) {
  const clientProfile = makeGetClientsService()

  try {
    const username = getClientsParams.parse(request.query)

    const { clients } = await clientProfile.execute({ username: username.name })
  
    if(clients.length > 0) {
      return reply.code(200).send(clients)
    } else {
      return reply.code(404).send({message: 'Não encontrado'})
    }

  } catch (error) {
    return reply.code(500).send({ error: 'Internal Server Error' })
  }
}
