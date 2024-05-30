import { z } from 'zod'

export const Gender = z.enum(['Male', 'Female'])

export const registerBodySchema = z.object({
  name: z.string(),
  birth_date: z.preprocess((arg) => {
    if (arg instanceof Date) return arg
    if (typeof arg === 'string') return new Date(arg)
  }, z.date()),
  address: z.string(),
  email: z.string().email(),
  phone: z.string(),
  gender: Gender,
  additional_information: z.string().optional(),
})

export const getClientsParams = z.object({
  name: z.string()
})

export const getClientsParamsById = z.object({
  id: z.string()
})
