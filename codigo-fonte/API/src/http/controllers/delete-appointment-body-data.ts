import { FastifyReply, FastifyRequest } from 'fastify'
import { getAppointmentParams } from '@/validations/appointment-validation'
import { makeDeleteAppointmentBodyDataService } from '@/services/factories/make-delete-appointment-body-service'

export async function deleteAppointmentBodyData(
  request: FastifyRequest,
  reply: FastifyReply,
) {
  const appointmentItem = makeDeleteAppointmentBodyDataService()

  try {
    const appointmentQuery = getAppointmentParams.parse(request.query)

    const status = await appointmentItem.execute({ id: appointmentQuery.id})
  
    return reply.code(200).send({message: status})

  } catch (error) {
    console.log(error)
    return reply.code(500).send({ error: 'Internal Server Error', message: error })
  }
}

