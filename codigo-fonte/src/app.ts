import fastify from 'fastify'
import { Prisma, PrismaClient } from '@prisma/client'
import { z } from 'zod'

export const app = fastify()

const prisma = new PrismaClient()

const MaritalStatus = z.enum(['Married', 'Single', 'Divorced'])
const Gender = z.enum(['Male', 'Female'])
const UserType = z.enum(['Admin', 'Client'])

const userSchema = z.object({
  name: z.string(),
  birth_date: z.date(),
  address: z.string(),
  marital_status: MaritalStatus,
  email: z.string().email(),
  phone: z.string(),
  gender: Gender,
  additional_information: z.string().optional(),
  user_type: UserType,
  password_hash: z.string(),
})

// Create USERS - Just for test, remember to move it to dedicated routes.
app.post('/users', async (request, reply) => {
  const fakeUserData: Prisma.UserCreateInput = {
    name: 'joao',
    birth_date: new Date('2024-01-01'),
    address: 'Rua 123, Belo Horizonte, Brazil',
    marital_status: 'Single',
    email: 'joao@example.com',
    phone: '1234567890',
    gender: 'Male',
    additional_information: "It's a tall guy",
    user_type: 'Admin',
    password_hash: 'hashed_password',
  }

  const validationResult = userSchema.safeParse(fakeUserData)
  if (!validationResult.success) {
    return reply.code(400).send(validationResult.error)
  }

  try {
    const user = await prisma.user.create({
      data: fakeUserData,
    })
    return reply.code(201).send(user)
  } catch (error) {
    request.log.error(error)
    return reply.code(500).send({ error: 'Unable to create user' })
  }
})
