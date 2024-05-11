import { z } from 'zod'

export const MaritalStatus = z.enum(['Married', 'Single', 'Divorced'])
export const Gender = z.enum(['Male', 'Female'])
export const UserType = z.enum(['Admin', 'Client'])

export const registerBodySchema = z.object({
  name: z.string(),
  birth_date: z.preprocess((arg) => {
    if (arg instanceof Date) return arg
    if (typeof arg === 'string') return new Date(arg)
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

export const getUsersParams = z.object({
  username: z.string().optional(),
  id: z.string()
})
