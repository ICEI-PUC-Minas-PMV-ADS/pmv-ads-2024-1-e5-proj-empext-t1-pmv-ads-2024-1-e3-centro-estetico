import { FastifyReply, FastifyRequest } from 'fastify';
import { ResourceNotFoundError } from '@/services/errors/resource-not-found-error';
import { getHealthQuestionnaireByClientId } from '@/validations/get-health-questionnaire-validation';
import { makeGetHealthQuestionnaireByClientIdService } from '@/services/factories/make-get-health-questionnaire-by-client-id-service';

export async function healthQuestionnaireByClientId(
  request: FastifyRequest,
  reply: FastifyReply,
) {
  const healthQuestionnaireItem = makeGetHealthQuestionnaireByClientIdService();

  try {
    const healthQuestionnaireQuery = getHealthQuestionnaireByClientId.parse(request.query);
    const { healthQuestionnaire } = await healthQuestionnaireItem.execute({
      client_id: healthQuestionnaireQuery.client_id,
    });

    if (healthQuestionnaire) {
      return reply.code(200).type('application/json').send(healthQuestionnaire);
    } else {
      return reply.code(404).type('application/json').send({ message: 'Questionário não encontrado' });
    }
  } catch (error) {
    return reply.code(500).type('application/json').send({ message: 'Internal server error' });
  }
}
