import { prisma } from '@/lib/prisma'
import { AppointmentSkinData, Prisma } from '@prisma/client'
import { IAppointmentsSkinRepository } from '../interfaces/iappointments-skin-repository'

export class PrismaAppointmentsSkinDataRepository implements IAppointmentsSkinRepository {

  async create(data: Prisma.AppointmentSkinDataCreateInput): Promise<AppointmentSkinData> {
    return await prisma.appointmentSkinData.create({ data })
  }

  async findByAppointmentId(appointment_id: string): Promise<AppointmentSkinData | null> {
    return await prisma.appointmentSkinData.findFirst({
      where: {
        appointment_id,
      },
    })
  }
  
  async findById(id: string): Promise<AppointmentSkinData | null> {
    return await prisma.appointmentSkinData.findUnique({
      where: {
        id,
      },
    })
  }

}
