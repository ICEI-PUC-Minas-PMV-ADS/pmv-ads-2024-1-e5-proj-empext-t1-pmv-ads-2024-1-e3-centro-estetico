import { PrismaAppointmentsSkinDataRepository } from '@/repositories/prisma/prisma-appointments-skin-data-repository'
import { GetAppointmentSkinDataService } from '@/services/get-appointment-skin-data-service'

export function makeGetAppointmentSkinDataService(): GetAppointmentSkinDataService {
  const appointmentRepository = new PrismaAppointmentsSkinDataRepository()
  const authenticateService = new GetAppointmentSkinDataService(appointmentRepository)

  return authenticateService
}
