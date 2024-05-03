import { prisma } from '@/lib/prisma'
import { ResourceNotFoundError } from '@/services/errors/resource-not-found-error'
import { SkinAnalysisAlreadyExistsError } from '@/services/errors/skin-analysis-already-exists-error'
import { Prisma, SkinAnalysis } from '@prisma/client'
import { ISkinAnalysisRepository } from '../interfaces/iskin-analysis-repository'

export class PrismaSkinAnalysisRepository implements ISkinAnalysisRepository {
  async create(data: Prisma.SkinAnalysisCreateInput): Promise<SkinAnalysis> {
    console.log(`ERRORRR`, data.Client.connect?.id)


    if (!data.Client.connect?.id) {
      throw new ResourceNotFoundError()
    }

    const skinAnalysisExists = await this.findByClientId(data.Client.connect.id)

    if (skinAnalysisExists) throw new SkinAnalysisAlreadyExistsError()

    const skinAnalysis = await prisma.skinAnalysis.create({ data })

    return skinAnalysis
  }

  async findById(id: string): Promise<SkinAnalysis | null> {
    return await prisma.skinAnalysis.findUnique({
      where: {
        id,
      },
    })
  }

  async findByClientId(id: string): Promise<SkinAnalysis | null> {
    return await prisma.skinAnalysis.findFirst({
      where: {
        client_id: id,
      },
    })
  }
}
