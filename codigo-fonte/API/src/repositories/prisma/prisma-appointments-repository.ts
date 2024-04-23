import { prisma } from '@/lib/prisma'
import { AppointmentHistory, Prisma } from '@prisma/client'
import { IAppointmentsRepository } from '../interfaces/iappointments-repository'

export class PrismaAppointmentsRepository implements IAppointmentsRepository {
  async create(data: Prisma.AppointmentHistoryCreateInput): Promise<AppointmentHistory> {
    return await prisma.appointmentHistory.create({ data })
  }
}
