import { z } from 'zod';

export const AppointmentType = z.enum(['Hair', 'Skin', 'Body']);

export const registerBodySchema = z.object({
  observations: z.string().optional(),
  presencial: z.boolean(),
  appointment_type: AppointmentType,
  userId: z.string().uuid(),
  clientId: z.string().uuid(),
});
