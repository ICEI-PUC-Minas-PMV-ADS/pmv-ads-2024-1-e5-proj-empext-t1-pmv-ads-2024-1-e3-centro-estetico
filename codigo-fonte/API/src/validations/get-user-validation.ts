import { z } from 'zod'

export const getUserBodySchema = z.object({
  username: z.string(),
})
