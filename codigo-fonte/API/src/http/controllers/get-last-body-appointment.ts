import { FastifyReply, FastifyRequest } from 'fastify'
import { getAppointmentParams } from '@/validations/appointment-validation'
import { makeGetLastBodyAppointmentService } from '@/services/factories/make-get-last-body-appointment-service'
import { ResourceNotFoundError } from '@/services/errors/resource-not-found-error'

export async function getLastBodyAppointment(
  request: FastifyRequest,
  reply: FastifyReply,
) {
  const appointmentItem = makeGetLastBodyAppointmentService()

  try {
    const appointmentQuery = getAppointmentParams.parse(request.query)

    const { appointment } = await appointmentItem.execute({ id: appointmentQuery.id})
  
    if(appointment) {
      return reply.code(200).send(appointment)
    } else {
      return reply.code(404).send({message: 'Não encontrado'})
    }

  } catch (error) {
    if (error instanceof ResourceNotFoundError) {
      return reply.code(404).send({ message: error.message })
    }
    console.log(error)
    return reply.code(500).send({ error: 'Internal Server Error' })
  }
}

