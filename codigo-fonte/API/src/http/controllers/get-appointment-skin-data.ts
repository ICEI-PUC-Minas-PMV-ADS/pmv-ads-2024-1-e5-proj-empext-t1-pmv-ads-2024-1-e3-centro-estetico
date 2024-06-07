import { FastifyReply, FastifyRequest } from 'fastify'
import { getAppointmentParams } from '@/validations/appointment-validation'
import { makeGetAppointmentSkinDataService } from '@/services/factories/make-get-appointment-skin-service'

export async function getAppointmentSkinData(
  request: FastifyRequest,
  reply: FastifyReply,
) {
  const appointmentItem = makeGetAppointmentSkinDataService()

  try {
    const appointmentQuery = getAppointmentParams.parse(request.query)

    const { appointment_skin_data } = await appointmentItem.execute({ id: appointmentQuery.id})
  
    if(appointment_skin_data) {
      return reply.code(200).send(appointment_skin_data)
    } else {
      return reply.code(404).send({message: 'Não encontrado'})
    }

  } catch (error) {
    console.log(error)
    return reply.code(500).send({ error: 'Internal Server Error' })
  }
}

