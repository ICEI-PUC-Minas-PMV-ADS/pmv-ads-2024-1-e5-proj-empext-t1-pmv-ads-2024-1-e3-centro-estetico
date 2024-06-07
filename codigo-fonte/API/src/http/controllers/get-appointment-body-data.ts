import { FastifyReply, FastifyRequest } from 'fastify'
import { getAppointmentParams } from '@/validations/appointment-validation'
import { makeGetAppointmentBodyDataService } from '@/services/factories/make-get-appointment-body-service'

export async function getAppointmentBodyData(
  request: FastifyRequest,
  reply: FastifyReply,
) {
  const appointmentItem = makeGetAppointmentBodyDataService()

  try {
    const appointmentQuery = getAppointmentParams.parse(request.query)

    const { appointment_body_data } = await appointmentItem.execute({ id: appointmentQuery.id})
  
    if(appointment_body_data) {
      return reply.code(200).send(appointment_body_data)
    } else {
      return reply.code(404).send({message: 'Não encontrado'})
    }

  } catch (error) {
    console.log(error)
    return reply.code(500).send({ error: 'Internal Server Error' })
  }
}

