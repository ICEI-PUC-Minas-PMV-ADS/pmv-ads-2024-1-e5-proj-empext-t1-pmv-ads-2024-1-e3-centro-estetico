import { FastifyReply, FastifyRequest } from 'fastify'
import { getAppointmentParams } from '@/validations/appointment-validation'
import { makeGetAppointmentService } from '@/services/factories/make-get-appointment-service'

export async function getAppointment(
  request: FastifyRequest,
  reply: FastifyReply,
) {
  const appointmentItem = makeGetAppointmentService()

  try {
    const appointmentQuery = getAppointmentParams.parse(request.query)

    const { appointment } = await appointmentItem.execute({ id: appointmentQuery.id})
  
    if(appointment) {
      return reply.code(200).send(appointment)
    } else {
      return reply.code(404).send({message: 'Não encontrado'})
    }

  } catch (error) {
    console.log(error)
    return reply.code(500).send({ error: 'Internal Server Error' })
  }
}

