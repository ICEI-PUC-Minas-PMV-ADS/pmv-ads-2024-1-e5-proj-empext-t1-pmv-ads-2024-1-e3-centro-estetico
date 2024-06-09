import { FastifyReply, FastifyRequest } from 'fastify'
import { makeGetEstheticianService } from '@/services/factories/make-get-esthetician-service'
import { getEstheticianRequestSchema} from '@/validations/get-esthetician-validation'

export async function getEstheticians(
  request: FastifyRequest,
  reply: FastifyReply,
) {
  const userProfile = makeGetEstheticianService()

  try {
    const estheticianQuery = getEstheticianRequestSchema.parse(request.query)

    const { user } = await userProfile.execute({ user_email: estheticianQuery.user_email })
  
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
