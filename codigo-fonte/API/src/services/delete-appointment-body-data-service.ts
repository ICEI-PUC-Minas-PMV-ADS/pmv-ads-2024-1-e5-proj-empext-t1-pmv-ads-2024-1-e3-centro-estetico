import { IAppointmentsBodyRepository } from '@/repositories/interfaces/iappointments-body-repository'
import { ResourceNotFoundError } from './errors/resource-not-found-error'

export interface DeleteAppointmentBodyDataServiceRequest {
  id: string
}

export class DeleteAppointmentBodyDataService {
  constructor(private appointmentBodyDataRepository: IAppointmentsBodyRepository) { }

  async execute({
    id,
  }: DeleteAppointmentBodyDataServiceRequest) {
    const appointmentData = await this.appointmentBodyDataRepository.deleteByAppointmentId(id)
    if (!appointmentData) throw new ResourceNotFoundError()

    return appointmentData
  }
}

