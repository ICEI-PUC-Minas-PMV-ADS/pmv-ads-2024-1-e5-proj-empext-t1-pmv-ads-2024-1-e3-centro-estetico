import { AppointmentHistory, Prisma } from '@prisma/client'

export interface IAppointmentsRepository {
  create(data: Prisma.AppointmentHistoryCreateInput): Promise<AppointmentHistory>
  findById(id: string): Promise<AppointmentHistory | null>
  findLatestBodyAppointmentByClientId(id: string): Promise<AppointmentHistory | null>
  findAppointmentsByClientId(clientId: string): Promise<AppointmentHistory[]>
  delete(id: string): Promise<AppointmentHistory | null>
}
