import { AppointmentSkinData, Prisma } from '@prisma/client'

export interface IAppointmentsSkinRepository {
  create(data: Prisma.AppointmentSkinDataCreateInput): Promise<AppointmentSkinData>
  findById(id: string): Promise<AppointmentSkinData | null>
  findByAppointmentId(id: string): Promise<AppointmentSkinData | null>
  deleteByAppointmentId(id: string): Promise<String>
}
