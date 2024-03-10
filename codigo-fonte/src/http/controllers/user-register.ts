import { z } from 'zod'
import { FastifyReply, FastifyRequest } from 'fastify'
import { UserRegisterService } from '@/services/user-register-service'
import { PrismaUsersRepository } from '@/repositories/prisma/prisma-users-repository'

export async function userRegister(
  request: FastifyRequest,
  reply: FastifyReply,
) {
  const MaritalStatus = z.enum(['Married', 'Single', 'Divorced'])
  const Gender = z.enum(['Male', 'Female'])
  const UserType = z.enum(['Admin', 'Client'])

  const registerBodySchema = z.object({
    name: z.string(),
    birth_date: z.preprocess((arg) => {
      if (typeof arg === 'string') {
        return new Date(arg)
      }
    }, z.date()),
    address: z.string(),
    marital_status: MaritalStatus,
    email: z.string().email(),
    phone: z.string(),
    gender: Gender,
    additional_information: z.string().optional(),
    user_type: UserType,
    password: z.string().min(6),
  })

  const userInputData = registerBodySchema.parse(request.body)

  try {
    const usersRepository = new PrismaUsersRepository()
    const userRegisterService = new UserRegisterService(usersRepository)
    const serviceResponse = await userRegisterService.execute(userInputData)

    return reply.code(201).send(serviceResponse)
  } catch (error) {
    request.log.error(error)
    return reply.code(409).send({ conflict: 'User already exists' })
  }
}
