import { PrismaAppointmentsRepository } from '@/repositories/prisma/prisma-appointments-repository'
import { GetAppointmentService } from '@/services/get-appointment-service'

export function makeGetAppointmentService(): GetAppointmentService {
  const appointmentRepository = new PrismaAppointmentsRepository()
  const authenticateService = new GetAppointmentService(appointmentRepository)

  return authenticateService
}
