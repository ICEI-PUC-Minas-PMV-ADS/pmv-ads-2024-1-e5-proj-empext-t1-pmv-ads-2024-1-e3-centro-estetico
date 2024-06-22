import { prisma } from '../../lib/prisma';
import { HealthQuestionnaire, Prisma } from '@prisma/client';
import { IHealthQuestionnairiesRepository } from '../interfaces/ihealth-questionnairies-repository';
import { subDays } from 'date-fns';


export class PrismaHealthQuestionnairiesRepository implements IHealthQuestionnairiesRepository {
  async create(data: Prisma.HealthQuestionnaireCreateInput): Promise<HealthQuestionnaire> {
    return await prisma.healthQuestionnaire.create({ data });
  }

  async findByClientId(client_id: string): Promise<HealthQuestionnaire | null> {
    return await prisma.healthQuestionnaire.findFirst({
      where: { client_id },
    });
  }

  async findRecentQuestionnaires(days: number): Promise<HealthQuestionnaire[]> {
    const dateThreshold = subDays(new Date(), days);
    return await prisma.healthQuestionnaire.findMany({
      where: {
        created_at: {
          gte: dateThreshold,
        },
      },
    });
  }


    async delete(client_id: string): Promise<HealthQuestionnaire | null> {
      const healthQuestionnaire = await prisma.healthQuestionnaire.findFirst({
        where: { client_id },
      });
  
      if (!healthQuestionnaire) {
        throw new Error(`No health questionnaire found for client_id: ${client_id}`);
      }
  
      return await prisma.healthQuestionnaire.delete({
        where: { id: healthQuestionnaire.id },
      });
    }
  }