import { FastifyReply, FastifyRequest } from 'fastify'
import { getAppointmentParams } from '@/validations/appointment-validation'
import { makeDeleteAppointmentSkinDataService } from '@/services/factories/make-delete-appointment-skin-service'

export async function deleteAppointmentSkinData(
  request: FastifyRequest,
  reply: FastifyReply,
) {
  const appointmentItem = makeDeleteAppointmentSkinDataService()

  try {
    const appointmentQuery = getAppointmentParams.parse(request.query)

    const status = await appointmentItem.execute({ id: appointmentQuery.id})
  
    return reply.code(200).send({message: status})


  } catch (error) {
    console.log(error)
    return reply.code(500).send({ error: 'Internal Server Error', message: error })
  }
}

