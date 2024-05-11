import { prisma } from '@/lib/prisma'
import { HealthQuestionnaire, Prisma } from '@prisma/client'
import { IHealthQuestionnairiesRepository } from '../interfaces/ihealth-questionnairies-repository'

export class PrismaHealthQuestionnairiesRepository implements IHealthQuestionnairiesRepository {
  async create(data: Prisma.HealthQuestionnaireCreateInput): Promise<HealthQuestionnaire> {
    return await prisma.healthQuestionnaire.create({ data })
  }
}
