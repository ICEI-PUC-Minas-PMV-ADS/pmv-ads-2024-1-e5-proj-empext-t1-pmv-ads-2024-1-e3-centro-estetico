import { AppointmentHistory, Prisma } from '@prisma/client'

export interface IAppointmentsRepository {
  create(data: Prisma.AppointmentHistoryCreateInput): Promise<AppointmentHistory>
}
