import { z } from 'zod'

export const getEstheticianBodySchema = z.object({
  user_id: z.string(),
  name: z.string(),
  email: z.string(),
  phone: z.string(),
  address: z.string(), 
})

export const getEstheticianRequestSchema = z.object({
  user_email: z.string(),
  
})
