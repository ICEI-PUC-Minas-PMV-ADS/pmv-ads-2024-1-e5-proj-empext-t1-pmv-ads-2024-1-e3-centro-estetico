import { PrismaAppointmentsSkinDataRepository } from '@/repositories/prisma/prisma-appointments-skin-data-repository'
import { CreateAppointmentSkinDataService } from '@/services/create-appointment-skin-data-service'

export function makeCreateAppointmentSkinDataService(): CreateAppointmentSkinDataService {
  const appointmentsSkinDataRepository = new PrismaAppointmentsSkinDataRepository()
  const createAppointmentSkinDataService = new CreateAppointmentSkinDataService(appointmentsSkinDataRepository)

  return createAppointmentSkinDataService
}
