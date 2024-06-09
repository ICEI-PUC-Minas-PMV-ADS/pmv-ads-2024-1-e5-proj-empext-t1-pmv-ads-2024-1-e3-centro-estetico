import { PrismaAppointmentsRepository } from '@/repositories/prisma/prisma-appointments-repository'
import { GetAppointmentsByClientService } from '@/services/get-appointments-by-client-service'

export function makeGetAppointmentsByClientService(): GetAppointmentsByClientService {
  const appointmentRepository = new PrismaAppointmentsRepository()
  const service = new GetAppointmentsByClientService(appointmentRepository)

  return service
}
