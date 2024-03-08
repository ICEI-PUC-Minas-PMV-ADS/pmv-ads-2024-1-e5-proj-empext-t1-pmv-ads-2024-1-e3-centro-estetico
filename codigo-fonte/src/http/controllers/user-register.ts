import { z } from 'zod'
import { hash } from 'bcryptjs'
import { prisma } from '@/lib/prisma'
import { FastifyReply, FastifyRequest } from 'fastify'

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
    email: z.string().email().optional(),
    phone: z.string(),
    gender: Gender,
    additional_information: z.string().optional(),
    user_type: UserType,
    password: z.string().min(6),
  })

  const { password, ...userInputWithoutPassword } = registerBodySchema.parse(
    request.body,
  )
  const password_hash = await hash(password, 6)

  const userExists = await prisma.user.findUnique({
    where: {
      email: userInputWithoutPassword.email,
    },
  })

  if (userExists) {
    return reply.code(409).send({ conflict: 'User already exists' })
  }

  const userData = { ...userInputWithoutPassword, password_hash }

  try {
    await prisma.user.create({
      data: userData,
    })

    return reply.code(201).send({ message: 'User created successfully' })
  } catch (error) {
    request.log.error(error)
    return reply.code(500).send({ error: 'Unable to create user' })
  }
}
