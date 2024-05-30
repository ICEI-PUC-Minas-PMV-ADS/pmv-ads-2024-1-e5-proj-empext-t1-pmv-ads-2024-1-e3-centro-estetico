import { z } from 'zod';

export const getAppointmentParams = z.object({
  id: z.string()
})


export const AppointmentType = z.enum(['Hair', 'Skin', 'Body']);

export const registerBodySchema = z.object({
  clientId: z.string().uuid(),
  userId: z.string().uuid(),
  specialty: z.string(),
  observations: z.string().optional(),
  appointment_date: z.preprocess((arg) => {
    if (arg instanceof Date) return arg
    if (typeof arg === 'string') return new Date(arg)
  }, z.date()),
  appointment_hour: z.string(),
  presencial: z.boolean(),
  appointment_type: AppointmentType,
  leftFace0: z.boolean(),
  leftFace1: z.boolean(),
  leftFace2: z.boolean(),
  leftFace3: z.boolean(),
  leftFace4: z.boolean(),
  leftFace5: z.boolean(),
  leftFace6: z.boolean(),
  leftFace7: z.boolean(),
  leftFace8: z.boolean(),
  leftFace9: z.boolean(),
  leftFace10: z.boolean(),
  rightFace0: z.boolean(),
  rightFace1: z.boolean(),
  rightFace2: z.boolean(),
  rightFace3: z.boolean(),
  rightFace4: z.boolean(),
  rightFace5: z.boolean(),
  rightFace6: z.boolean(),
  rightFace7: z.boolean(),
  rightFace8: z.boolean(),
  rightFace9: z.boolean(),
  rightFace10: z.boolean(),
  frontFace0: z.boolean(),
  frontFace1: z.boolean(),
  frontFace2: z.boolean(),
  frontFace3: z.boolean(),
  frontFace4: z.boolean(),
  frontFace5: z.boolean(),
  frontFace6: z.boolean(),
  frontFace7: z.boolean(),
  frontFace8: z.boolean(),
  frontFace9: z.boolean(),
  frontFace10: z.boolean(),
  frontFace11: z.boolean(),
});
