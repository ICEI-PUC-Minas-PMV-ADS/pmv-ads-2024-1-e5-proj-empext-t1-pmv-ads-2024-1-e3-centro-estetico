import { IAppointmentsRepository } from '@/repositories/interfaces/iappointments-repository'
import { ResourceNotFoundError } from './errors/resource-not-found-error'

export interface GetAppointmentServiceRequest {
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
    user_id: string,
    image_data?: {
      leftFace0?: boolean
      leftFace1?: boolean
      leftFace2?: boolean
      leftFace3?: boolean
      leftFace4?: boolean
      leftFace5?: boolean
      leftFace6?: boolean
      leftFace7?: boolean
      leftFace8?: boolean
      leftFace9?: boolean
      leftFace10?: boolean
      rightFace0?: boolean
      rightFace1?: boolean
      rightFace2?: boolean
      rightFace3?: boolean
      rightFace4?: boolean
      rightFace5?: boolean
      rightFace6?: boolean
      rightFace7?: boolean
      rightFace8?: boolean
      rightFace9?: boolean
      rightFace10?: boolean
      frontFace0?: boolean
      frontFace1?: boolean
      frontFace2?: boolean
      frontFace3?: boolean
      frontFace4?: boolean
      frontFace5?: boolean
      frontFace6?: boolean
      frontFace7?: boolean
      frontFace8?: boolean
      frontFace9?: boolean
      frontFace10?: boolean
      frontFace11?: boolean
    }
}

interface GetAppointmentServiceResponse {
  appointment: Appointment
}

export class GetAppointmentService {
  constructor(private appointmentRepository: IAppointmentsRepository) {}

  async execute({
    id,
  }: GetAppointmentServiceRequest): Promise<GetAppointmentServiceResponse> {
    const appointment = await this.appointmentRepository.findById(id)
    if (!appointment) throw new ResourceNotFoundError()

    if(appointment.appointment_type === 'Hair') {
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
    } else { 
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
          user_id: appointment.user_id,
          image_data: {
            leftFace0: appointment.leftFace0,
            leftFace1: appointment.leftFace1,
            leftFace2: appointment.leftFace2,
            leftFace3: appointment.leftFace3,
            leftFace4: appointment.leftFace4,
            leftFace5: appointment.leftFace5,
            leftFace6: appointment.leftFace6,
            leftFace7: appointment.leftFace7,
            leftFace8: appointment.leftFace8,
            leftFace9: appointment.leftFace9,
            leftFace10: appointment.leftFace10,
            rightFace0: appointment.rightFace0,
            rightFace1: appointment.rightFace1,
            rightFace2: appointment.rightFace2,
            rightFace3: appointment.rightFace3,
            rightFace4: appointment.rightFace4,
            rightFace5: appointment.rightFace5,
            rightFace6: appointment.rightFace6,
            rightFace7: appointment.rightFace7,
            rightFace8: appointment.rightFace8,
            rightFace9: appointment.rightFace9,
            rightFace10: appointment.rightFace10,
            frontFace0: appointment.frontFace0,
            frontFace1: appointment.frontFace1,
            frontFace2: appointment.frontFace2,
            frontFace3: appointment.frontFace3,
            frontFace4: appointment.frontFace4,
            frontFace5: appointment.frontFace5,
            frontFace6: appointment.frontFace6,
            frontFace7: appointment.frontFace7,
            frontFace8: appointment.frontFace8,
            frontFace9: appointment.frontFace9,
            frontFace10: appointment.frontFace10,
            frontFace11: appointment.frontFace11,
          }
        }
      }
    }

  }
}
