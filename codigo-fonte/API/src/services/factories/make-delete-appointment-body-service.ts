import { PrismaAppointmentsBodyDataRepository } from '@/repositories/prisma/prisma-appointments-body-data-repository'
import { DeleteAppointmentBodyDataService } from '@/services/delete-appointment-body-data-service'

export function makeDeleteAppointmentBodyDataService(): DeleteAppointmentBodyDataService {
  const appointmentRepository = new PrismaAppointmentsBodyDataRepository()
  const authenticateService = new DeleteAppointmentBodyDataService(appointmentRepository)

  return authenticateService
}
