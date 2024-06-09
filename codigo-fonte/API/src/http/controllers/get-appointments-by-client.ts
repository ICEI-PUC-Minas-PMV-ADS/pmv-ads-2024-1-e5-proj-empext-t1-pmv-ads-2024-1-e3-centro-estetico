import { FastifyReply, FastifyRequest } from 'fastify'
import { getAppointmentParams } from '@/validations/appointment-validation'
import { makeGetAppointmentsByClientService } from '@/services/factories/make-get-appointments-by-client-service'
import { ResourceNotFoundError } from '@/services/errors/resource-not-found-error'

export async function getAppointmentsByClient(
  request: FastifyRequest,
  reply: FastifyReply,
) {
  const { id } = getAppointmentParams.parse(request.params)

  try {
    const getAppointmentsByClientService = makeGetAppointmentsByClientService()
    const serviceResponse = await getAppointmentsByClientService.execute({ clientId: id })

    return reply.code(200).send(serviceResponse)
  } catch (error) {
    if (error instanceof ResourceNotFoundError) {
      return reply.code(404).send({ message: error.message })
    }

    return reply.code(500).send({ error: 'Internal Server Error' })
  }
}

