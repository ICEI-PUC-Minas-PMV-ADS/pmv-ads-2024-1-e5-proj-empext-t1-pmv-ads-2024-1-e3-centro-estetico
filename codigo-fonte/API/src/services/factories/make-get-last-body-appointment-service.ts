import { PrismaAppointmentsRepository } from '@/repositories/prisma/prisma-appointments-repository'
import { GetLastBodyAppointmentService } from '@/services/get-last-body-appointment-service'

export function makeGetLastBodyAppointmentService(): GetLastBodyAppointmentService {
  const appointmentRepository = new PrismaAppointmentsRepository()
  const authenticateService = new GetLastBodyAppointmentService(appointmentRepository)

  return authenticateService
}
