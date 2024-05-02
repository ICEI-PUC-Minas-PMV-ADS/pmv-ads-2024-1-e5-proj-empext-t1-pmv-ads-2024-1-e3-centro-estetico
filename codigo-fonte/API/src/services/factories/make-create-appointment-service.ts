import { PrismaAppointmentsRepository } from '@/repositories/prisma/prisma-appointments-repository'
import { CreateAppointmentService } from '@/services/create-appointment-service'

export function makeCreateAppointmentService(): CreateAppointmentService {
  const appointmentsRepository = new PrismaAppointmentsRepository()
  const createAppointmentService = new CreateAppointmentService(appointmentsRepository)

  return createAppointmentService
}
