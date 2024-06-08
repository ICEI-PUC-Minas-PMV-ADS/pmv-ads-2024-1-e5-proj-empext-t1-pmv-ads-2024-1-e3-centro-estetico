  import { IAppointmentsRepository } from '@/repositories/interfaces/iappointments-repository'

  export interface GetAppointmentsByClientServiceRequest {
    clientId: string
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

  interface GetAppointmentsServiceResponse {
    appointments: Appointment[]
  }

  export class GetAppointmentsByClientService {
    constructor(private appointmentRepository: IAppointmentsRepository) {}

    async execute({
      clientId,
    }: GetAppointmentsByClientServiceRequest): Promise<GetAppointmentsServiceResponse> {
      const appointments = await this.appointmentRepository.findAppointmentsByClientId(clientId)
      if (appointments.length === 0) return { appointments: [] }

      return {
        appointments: appointments.map(appointment => ({
          id: appointment.id,
          specialty: appointment.specialty,
          observations: appointment.observations,
          appointment_date: appointment.appointment_date,
          appointment_hour: appointment.appointment_hour,
          created_at: appointment.created_at,
          presencial: appointment.presencial,
          appointment_type: appointment.appointment_type,
          client_id: appointment.client_id,
          user_id: appointment.user_id,
        })),
      }
    }
  }
