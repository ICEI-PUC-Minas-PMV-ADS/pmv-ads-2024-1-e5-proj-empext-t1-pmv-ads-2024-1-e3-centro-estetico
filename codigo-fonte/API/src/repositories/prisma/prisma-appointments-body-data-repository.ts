import { prisma } from '@/lib/prisma'
import { AppointmentBodyData, Prisma } from '@prisma/client'
import { IAppointmentsBodyRepository } from '../interfaces/iappointments-body-repository'

export class PrismaAppointmentsBodyDataRepository implements IAppointmentsBodyRepository {

  async create(data: Prisma.AppointmentBodyDataCreateInput): Promise<AppointmentBodyData> {
    return await prisma.appointmentBodyData.create({ data })
  }

  async findByAppointmentId(appointment_id: string): Promise<AppointmentBodyData | null> {
    return await prisma.appointmentBodyData.findFirst({
      where: {
        appointment_id,
      },
    })
  }
  
  async findById(id: string): Promise<AppointmentBodyData | null> {
    return await prisma.appointmentBodyData.findUnique({
      where: {
        id,
      },
    })
  }

}
