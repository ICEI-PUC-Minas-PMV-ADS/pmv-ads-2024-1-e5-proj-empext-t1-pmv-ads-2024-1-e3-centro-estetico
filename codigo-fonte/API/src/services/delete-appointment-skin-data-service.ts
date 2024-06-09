import { IAppointmentsSkinRepository } from '@/repositories/interfaces/iappointments-skin-repository'
import { ResourceNotFoundError } from './errors/resource-not-found-error'

export interface DeleteAppointmentSkinDataServiceRequest {
  id: string
}

export class DeleteAppointmentSkinDataService {
  constructor(private appointmentSkinDataRepository: IAppointmentsSkinRepository) { }

  async execute({
    id,
  }: DeleteAppointmentSkinDataServiceRequest) {
    const appointmentData = await this.appointmentSkinDataRepository.deleteByAppointmentId(id)
    if (!appointmentData) throw new ResourceNotFoundError()

    return appointmentData
  }
}

