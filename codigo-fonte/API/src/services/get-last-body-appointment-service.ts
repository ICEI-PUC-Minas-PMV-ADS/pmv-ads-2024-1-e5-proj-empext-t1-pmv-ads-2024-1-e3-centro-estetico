import { IAppointmentsRepository } from '@/repositories/interfaces/iappointments-repository'
import { ResourceNotFoundError } from './errors/resource-not-found-error'

export interface GetLastBodyAppointmentServiceRequest {
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

interface GetLastBodyAppointmentServiceResponse {
  appointment: Appointment
}

export class GetLastBodyAppointmentService {
  constructor(private appointmentRepository: IAppointmentsRepository) {}

  async execute({
    id,
  }: GetLastBodyAppointmentServiceRequest): Promise<GetLastBodyAppointmentServiceResponse> {
    const appointment = await this.appointmentRepository.findLatestBodyAppointmentByClientId(id)
    if (!appointment) throw new ResourceNotFoundError()

      return {
        appointment: {
          id: appointment.id,
          specialty: appointment.specialty,
          observations: appointment.observations,
          appointment_date: appointment.appointment_date,
          appointment_hour: appointment.appointment_hour,
          created_at: appointment.created_at,
          presencial: appointment.presencial,
          appointment_type: appointment.appointment_type,
          client_id: appointment.client_id,
          user_id: appointment.user_id
      }
    }
  }
}
