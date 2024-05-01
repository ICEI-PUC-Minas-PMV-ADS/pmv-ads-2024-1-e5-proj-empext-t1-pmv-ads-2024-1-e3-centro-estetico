import { SkinAnalysis, Prisma } from '@prisma/client'

export interface ISkinAnalysisRepository {
  create(data: Prisma.SkinAnalysisCreateInput): Promise<SkinAnalysis>
  findById(id: string): Promise<SkinAnalysis | null>
}
