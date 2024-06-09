import { PrismaAppointmentsSkinDataRepository } from '@/repositories/prisma/prisma-appointments-skin-data-repository'
import { DeleteAppointmentSkinDataService } from '@/services/delete-appointment-skin-data-service'

export function makeDeleteAppointmentSkinDataService(): DeleteAppointmentSkinDataService {
  const appointmentRepository = new PrismaAppointmentsSkinDataRepository()
  const authenticateService = new DeleteAppointmentSkinDataService(appointmentRepository)

  return authenticateService
}
