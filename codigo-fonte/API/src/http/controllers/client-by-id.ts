import { FastifyReply, FastifyRequest } from 'fastify'
import { makeGetClientByIdService } from '@/services/factories/make-get-client-by-id-service'
import { getClientsParamsById } from '@/validations/client-validation'

export async function clientById(
  request: FastifyRequest,
  reply: FastifyReply,
) {
  const clientItem = makeGetClientByIdService()

  try {
    const clientQuery = getClientsParamsById.parse(request.query)

    const { client } = await clientItem.execute({ id: clientQuery.id })
  
    if(client) {
      return reply.code(200).send(client)
    } else {
      return reply.code(404).send({message: 'Não encontrado'})
    }

  } catch (error) {
    return reply.code(500).send({ error: 'Internal Server Error' })
  }
}
