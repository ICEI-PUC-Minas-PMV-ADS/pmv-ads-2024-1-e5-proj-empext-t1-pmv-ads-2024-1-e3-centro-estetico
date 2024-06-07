import { PrismaAppointmentsBodyDataRepository } from '@/repositories/prisma/prisma-appointments-body-data-repository'
import { CreateAppointmentBodyDataService } from '@/services/create-appointment-body-data-service'

export function makeCreateAppointmentBodyDataService(): CreateAppointmentBodyDataService {
  const appointmentsBodyDataRepository = new PrismaAppointmentsBodyDataRepository()
  const createAppointmentBodyDataService = new CreateAppointmentBodyDataService(appointmentsBodyDataRepository)

  return createAppointmentBodyDataService
}
