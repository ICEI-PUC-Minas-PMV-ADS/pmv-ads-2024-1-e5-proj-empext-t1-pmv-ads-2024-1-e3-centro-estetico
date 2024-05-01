import { IHealthQuestionariesRepository } from "@/repositories/interfaces/ihealthquestionaries-repository";

export type CreateHealthQuestionariesServiceType = {
  observations?: string | null;
  presencial: boolean;
  healthquestionary_type: "Hair" | "Skin" | "Body";
  userId: string;
  clientId: string;
};

interface ICreateHealthQuestionariesService {
  execute: (
    healthquestionaryInputData: CreateHealthQuestionariesServiceType
  ) => Promise<{ message: string }>;
}

export class CreateHealthQuestionariesService implements ICreateHealthQuestionariesService {
  constructor(private healthquestionariesRepository: IHealthQuestionariesRepository) {}

  async execute(healthquestionaryInputData: CreateHealthQuestionariesServiceType) {
    const healthquestionaryData =
      await this.buildHealthQuestionaryData(healthquestionaryInputData);

    await this.healthquestionariesRepository.create(healthquestionaryInputData);
    return { message: "HealthQuestionary created successfully" };
  }

  async buildHealthQuestionaryData(
    healthquestionaryInputData: CreateHealthQuestionariesServiceType
  ) {
    const { userId, clientId, ...healthquestionaryDataWithoutIds } =
      healthquestionaryInputData;

    const healthquestionaryData = {
      ...healthquestionaryDataWithoutIds,
      User: {
        connect: { id: userId },
      },
      Client: {
        connect: { id: clientId },
      },
    }

    return healthquestionaryData;
  }
}
