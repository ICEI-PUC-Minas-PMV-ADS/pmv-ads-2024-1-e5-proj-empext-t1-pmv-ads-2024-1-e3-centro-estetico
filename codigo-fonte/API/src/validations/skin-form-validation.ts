import { z } from 'zod';

export const registerBodySchema = z.object({
  skinPhototypes: z.string().optional(),
  skinColors: z.string().optional(),
  dehydrationLevels: z.string().optional(),
  skinTextures: z.string().optional(),
  poreSizes: z.string().optional(),
  skinTypes: z.string().optional(),
  oilinessLevels: z.string().optional(),
  acneGrades: z.string().optional(),
  skinInvolution: z.record(z.string(), z.object({ type: z.string().optional(), typeDescription: z.string().optional() })).optional(),
  skinContains: z.array(z.string()).optional(),
  hypotonias: z.array(z.string()).optional(),
  tyrichosis: z.array(z.string()).optional(),
  scars: z.record(z.string(), z.object({ type: z.string().optional(), typeDescription: z.string().optional() })).optional(),
  purpuricSpots: z.array(z.string()).optional(),
  pigmentedSpots: z.array(z.string()).optional(),
  melanotics: z.array(z.string()).optional(),
  notMelanotics: z.array(z.string()).optional(),
  skinLesions: z.array(z.string()).optional(),
  fluidSkinLesions: z.array(z.string()).optional(),
  bloodVessels: z.record(z.string(), z.object({ type: z.string().optional(), typeDescription: z.string().optional() })).optional(),
  others: z.string().optional(),
  additionalInformation: z.string().optional(),
});

export const getSkinFormParams = z.object({
  clientId: z.string()
})
export const getSkinFormIdParams = z.object({
  skinAnalysisId: z.string()
})