import { PrismaAppointmentsBodyDataRepository } from '@/repositories/prisma/prisma-appointments-body-data-repository'
import { GetAppointmentBodyDataService } from '@/services/get-appointment-body-data-service'

export function makeGetAppointmentBodyDataService(): GetAppointmentBodyDataService {
  const appointmentRepository = new PrismaAppointmentsBodyDataRepository()
  const authenticateService = new GetAppointmentBodyDataService(appointmentRepository)

  return authenticateService
}
