import { z } from 'zod'
import { FastifyReply, FastifyRequest } from 'fastify'
import { userRegisterService } from '@/services/user-register-service'

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

  const userData = registerBodySchema.parse(request.body)

  try {
    const serviceResponse = await userRegisterService(userData)

    return reply.code(201).send(serviceResponse)
  } catch (error) {
    request.log.error(error)
    return reply.code(409).send({ conflict: 'User already exists' })
  }
}
