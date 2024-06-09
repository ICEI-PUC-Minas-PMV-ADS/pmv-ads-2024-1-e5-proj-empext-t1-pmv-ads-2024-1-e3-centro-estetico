import { prisma } from '@/lib/prisma'
import { AppointmentHistory, Prisma } from '@prisma/client'
import { IAppointmentsRepository } from '../interfaces/iappointments-repository'

export class PrismaAppointmentsRepository implements IAppointmentsRepository {

  async create(data: Prisma.AppointmentHistoryCreateInput): Promise<AppointmentHistory> {
    return await prisma.appointmentHistory.create({ data })
  }

  async findById(id: string): Promise<AppointmentHistory | null> {
    return await prisma.appointmentHistory.findUnique({
      where: {
        id,
      },
    })
  }

  async delete(id: string): Promise<AppointmentHistory | null> {
    return await prisma.appointmentHistory.delete({
      where: {
        id,
      },
    })
  }

  async findLatestBodyAppointmentByClientId(clientId: string): Promise<AppointmentHistory | null> {
    return await prisma.appointmentHistory.findFirst({
      where: {
        client_id: clientId,
        appointment_type: 'Body'
      },
      orderBy: [
        {
          appointment_date: 'desc'
        },
        {
          created_at: 'desc'
        }
      ]
    })
  }

  async findAppointmentsByClientId(clientId: string): Promise<AppointmentHistory[]>{
    return await prisma.appointmentHistory.findMany({
      where: {
        client_id: clientId
      },
      orderBy: [
        {
          appointment_date: 'desc'
        },
        {
          created_at: 'desc'
        }
      ]
    })
  }
}
