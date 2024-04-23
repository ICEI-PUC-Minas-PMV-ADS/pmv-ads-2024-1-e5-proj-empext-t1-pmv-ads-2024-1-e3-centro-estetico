import { FastifyReply, FastifyRequest } from 'fastify'
import { UserAlreadyExistsError } from '@/services/errors/user-already-exists-error'
import { registerBodySchema } from '@/validations/appointment-validation'
import { makeCreateAppointmentService } from '@/services/factories/make-create-appointment-service'

export async function createAppointment(
  request: FastifyRequest,
  reply: FastifyReply,
) {
  const appointInputData = registerBodySchema.parse(request.body)

  try {
    const createAppointmentService = makeCreateAppointmentService()
    const serviceResponse = await createAppointmentService.execute(appointInputData)

    return reply.code(201).send(serviceResponse)
  } catch (error) {
    request.log.error(error)

    if (error instanceof UserAlreadyExistsError) {
      return reply.code(409).send({ message: error.message })
    }

    return reply.code(500).send({ error: 'Internal Server Error' })
  }
}
