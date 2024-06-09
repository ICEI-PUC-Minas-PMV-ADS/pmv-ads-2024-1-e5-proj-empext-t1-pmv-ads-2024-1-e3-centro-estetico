import { FastifyReply, FastifyRequest } from 'fastify';
import { ResourceNotFoundError } from '@/services/errors/resource-not-found-error';
import { getRecentHealthQuestionnairies } from '@/validations/get-health-questionnaire-validation';
import { makeGetRecentHealthQuestionnaireService } from '@/services/factories/make-get-recent-health-questionnaire-service';

export async function recentHealthQuestionnairies(
  request: FastifyRequest,
  reply: FastifyReply,
) {
  const healthQuestionnairiesItem = makeGetRecentHealthQuestionnaireService();

  try {
    const healthQuestionnairiesQuery = getRecentHealthQuestionnairies.parse(request.query);
    const { healthQuestionnairies } = await healthQuestionnairiesItem.execute({
      days: parseInt(healthQuestionnairiesQuery.days),
    });

    if (healthQuestionnairies) {
      return reply.code(200).type('application/json').send(healthQuestionnairies);
    } else {
      return reply.code(404).type('application/json').send({ message: 'Questionário não encontrado' });
    }
  } catch (error) {
    console.log(error)
    if (error instanceof ResourceNotFoundError) {
      return reply.code(404).send({ message: error.message })
    }
    return reply.code(500).send({ error: 'Internal Server Error' })
  }
}
