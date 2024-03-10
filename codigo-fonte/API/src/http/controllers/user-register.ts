import { FastifyReply, FastifyRequest } from 'fastify'
import { UserRegisterService } from '@/services/user-register-service'
import { PrismaUsersRepository } from '@/repositories/prisma/prisma-users-repository'
import { UserAlreadyExistsError } from '@/services/errors/user-already-exists-error'
import { registerBodySchema } from '@/validations/user-validation'

export async function userRegister(
  request: FastifyRequest,
  reply: FastifyReply,
) {
  const userInputData = registerBodySchema.parse(request.body)

  try {
    const usersRepository = new PrismaUsersRepository()
    const userRegisterService = new UserRegisterService(usersRepository)
    const serviceResponse = await userRegisterService.execute(userInputData)

    return reply.code(201).send(serviceResponse)
  } catch (error) {
    request.log.error(error)

    if (error instanceof UserAlreadyExistsError) {
      return reply.code(409).send({ message: error.message })
    }

    return reply.code(500).send({ error: 'Internal Server Error' })
  }
}
