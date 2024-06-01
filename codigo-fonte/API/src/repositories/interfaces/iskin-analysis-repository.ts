import { Prisma, SkinAnalysis } from '@prisma/client';

export interface ISkinAnalysisRepository {
  create(data: Prisma.SkinAnalysisCreateInput): Promise<SkinAnalysis>
  findById(id: string): Promise<SkinAnalysis | null>
  findByClientId(id: string): Promise<SkinAnalysis | null>
  update(params: { where: { id: string }, data: Prisma.SkinAnalysisUpdateInput }): Promise<SkinAnalysis>;
}
