import { IAppointmentsRepository } from '@/repositories/interfaces/iappointments-repository'
import { ResourceNotFoundError } from './errors/resource-not-found-error'

export interface DeleteAppointmentServiceRequest {
  id: string
}

type Appointment = {
    id: string
    specialty: string
    observations: string | null
    appointment_date: Date | string
    appointment_hour: string | null
    created_at: Date | string
    presencial: boolean
    appointment_type: 'Hair' | 'Skin' | 'Body'
    client_id: string
    user_id: string
}

interface DeleteAppointmentServiceResponse {
  appointment: Appointment
}

export class DeleteAppointmentService {
  constructor(private appointmentRepository: IAppointmentsRepository) {}

  async execute({
    id,
  }: DeleteAppointmentServiceRequest): Promise<DeleteAppointmentServiceResponse> {
    const appointment = await this.appointmentRepository.delete(id)
    if (!appointment) throw new ResourceNotFoundError()

      return {
        appointment: appointment
    }
  }
}
