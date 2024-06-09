import { PrismaAppointmentsRepository } from '@/repositories/prisma/prisma-appointments-repository'
import { DeleteAppointmentService } from '@/services/delete-appointment-service'

export function makeDeleteAppointmentService(): DeleteAppointmentService {
  const appointmentRepository = new PrismaAppointmentsRepository()
  const authenticateService = new DeleteAppointmentService(appointmentRepository)

  return authenticateService
}
