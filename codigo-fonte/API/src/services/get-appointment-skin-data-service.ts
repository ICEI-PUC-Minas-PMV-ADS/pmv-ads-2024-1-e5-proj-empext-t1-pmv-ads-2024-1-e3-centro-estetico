import { IAppointmentsSkinRepository } from '@/repositories/interfaces/iappointments-skin-repository'
import { ResourceNotFoundError } from './errors/resource-not-found-error'

export interface GetAppointmentSkinDataServiceRequest {
  id: string
}

type AppointmentSkinData = {
  id: string,
  appointment_id: string,
  leftFace0: boolean,  
  leftFace1: boolean,  
  leftFace2: boolean,  
  leftFace3: boolean,  
  leftFace4: boolean,  
  leftFace5: boolean,  
  leftFace6: boolean,  
  leftFace7: boolean,  
  leftFace8: boolean,  
  leftFace9: boolean,  
  leftFace10: boolean,
  rightFace0: boolean, 
  rightFace1: boolean, 
  rightFace2: boolean, 
  rightFace3: boolean, 
  rightFace4: boolean, 
  rightFace5: boolean, 
  rightFace6: boolean, 
  rightFace7: boolean, 
  rightFace8: boolean, 
  rightFace9: boolean, 
  rightFace10: boolean,
  frontFace0: boolean, 
  frontFace1: boolean, 
  frontFace2: boolean, 
  frontFace3: boolean, 
  frontFace4: boolean, 
  frontFace5: boolean, 
  frontFace6: boolean, 
  frontFace7: boolean, 
  frontFace8: boolean, 
  frontFace9: boolean, 
  frontFace10: boolean,
  frontFace11: boolean
}

interface GetAppointmentSkinDataServiceResponse {
  appointment_skin_data: AppointmentSkinData
}

export class GetAppointmentSkinDataService {
  constructor(private appointmentSkinDataRepository: IAppointmentsSkinRepository) { }

  async execute({
    id,
  }: GetAppointmentSkinDataServiceRequest): Promise<GetAppointmentSkinDataServiceResponse> {
    const appointmentData = await this.appointmentSkinDataRepository.findByAppointmentId(id)
    if (!appointmentData) throw new ResourceNotFoundError()
    return {
      appointment_skin_data: { ...appointmentData }
    }
  }
}

