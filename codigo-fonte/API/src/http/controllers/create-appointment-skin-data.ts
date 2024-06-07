import { FastifyReply, FastifyRequest } from 'fastify'
import { UserAlreadyExistsError } from '@/services/errors/user-already-exists-error'
import { registerBodySkinDataSchema } from '@/validations/appointment-validation'
import { makeCreateAppointmentSkinDataService } from '@/services/factories/make-create-appointment-skin-data-service'

export async function createAppointmentSkinData(
  request: FastifyRequest,
  reply: FastifyReply,
) {
  const appointInputData = registerBodySkinDataSchema.parse(request.body)

  try {
    const createAppointmentSkinDataService = makeCreateAppointmentSkinDataService()
    const serviceResponse = await createAppointmentSkinDataService.execute(appointInputData)

    return reply.code(201).send(serviceResponse)
  } catch (error) {
    request.log.error(error)

    if (error instanceof UserAlreadyExistsError) {
      return reply.code(409).send({ message: error.message })
    }

    return reply.code(500).send({ error: 'Internal Server Error' })
  }
}
