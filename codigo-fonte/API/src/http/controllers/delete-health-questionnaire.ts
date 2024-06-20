import { FastifyReply, FastifyRequest } from 'fastify';
import { getHealthQuestionnaireByClientId } from '@/validations/get-health-questionnaire-validation';
import { makeDeleteHealthQuestionnaireService } from '@/services/factories/make-delete-health-questionnaire-service';
import { ResourceNotFoundError } from '@/services/errors/resource-not-found-error';

export async function deleteHealthQuestionnaire(
  request: FastifyRequest,
  reply: FastifyReply,
) {
  const healthQuestionnaireItem = makeDeleteHealthQuestionnaireService();

  try {
    const healthQuestionnaireQuery = getHealthQuestionnaireByClientId.parse(request.query);
    const { healthQuestionnaire } = await healthQuestionnaireItem.execute({
        client_id: healthQuestionnaireQuery.client_id,
    });
  
    if (healthQuestionnaire) {
      return reply.code(200).send(healthQuestionnaire);
    } else {
      return reply.code(404).send({message: 'Não encontrado'});
    }
  } catch (error) {
    if (error instanceof ResourceNotFoundError) {
      return reply.code(404).send({ message: error.message });
    }
    return reply.code(500).send({ error: 'Internal Server Error', message: error });
  }
}
