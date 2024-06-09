import { AppointmentBodyData, Prisma } from '@prisma/client'

export interface IAppointmentsBodyRepository {
  create(data: Prisma.AppointmentBodyDataCreateInput): Promise<AppointmentBodyData>
  findById(id: string): Promise<AppointmentBodyData | null>
  findByAppointmentId(id: string): Promise<AppointmentBodyData | null>
  deleteByAppointmentId(id: string): Promise<String>
}
