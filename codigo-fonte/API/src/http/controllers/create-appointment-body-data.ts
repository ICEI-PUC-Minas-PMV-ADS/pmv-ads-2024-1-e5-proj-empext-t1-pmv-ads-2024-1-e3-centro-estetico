import { FastifyReply, FastifyRequest } from 'fastify'
import { UserAlreadyExistsError } from '@/services/errors/user-already-exists-error'
import { registerBodyBodyDataSchema } from '@/validations/appointment-validation'
import { makeCreateAppointmentBodyDataService } from '@/services/factories/make-create-appointment-body-data-service'

export async function createAppointmentBodyData(
  request: FastifyRequest,
  reply: FastifyReply,
) {
  const appointInputData = registerBodyBodyDataSchema.parse(request.body)

  try {
    const createAppointmentBodyDataService = makeCreateAppointmentBodyDataService()
    const serviceResponse = await createAppointmentBodyDataService.execute(appointInputData)

    return reply.code(201).send(serviceResponse)
  } catch (error) {
    request.log.error(error)

    if (error instanceof UserAlreadyExistsError) {
      return reply.code(409).send({ message: error.message })
    }

    return reply.code(500).send({ error: 'Internal Server Error' })
  }
}
