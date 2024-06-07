import { IAppointmentsBodyRepository } from '@/repositories/interfaces/iappointments-body-repository'
import { ResourceNotFoundError } from './errors/resource-not-found-error'

export interface GetAppointmentBodyDataServiceRequest {
  id: string
}

type AppointmentBodyData = {
  id: string,
  appointment_id: string,
  backBody0: boolean;
  backBody1: boolean;
  backBody2: boolean;
  backBody3: boolean;
  backBody4: boolean;
  backBody5: boolean;
  backBody6: boolean;
  backBody7: boolean;
  backBody8: boolean;
  backBody9: boolean;
  backBody10: boolean;
  backBody11: boolean;
  backBody12: boolean;
  backBody13: boolean;
  backBody14: boolean;
  backBody15: boolean;
  backBody16: boolean;
  backBody17: boolean;
  backBody18: boolean;
  backBody19: boolean;
  backBody20: boolean;
  backBody21: boolean;
  frontBody0: boolean;
  frontBody1: boolean;
  frontBody2: boolean;
  frontBody3: boolean;
  frontBody4: boolean;
  frontBody5: boolean;
  frontBody6: boolean;
  frontBody7: boolean;
  frontBody8: boolean;
  frontBody9: boolean;
  frontBody10: boolean;
  frontBody11: boolean;
  frontBody12: boolean;
  frontBody13: boolean;
  frontBody14: boolean;
  frontBody15: boolean;
  frontBody16: boolean;
  frontBody17: boolean;
  frontBody18: boolean;
  frontBody19: boolean;
  frontBody20: boolean;
  frontBody21: boolean;
  abdomenTop?: number | null;       
  abdomenBottom?: number | null;
  waist?: number | null;             
  hip?: number | null;               
  upperLegProxRight?: number | null; 
  upperLegProxLeft?: number | null;  
  mediumLegRight?: number | null;    
  mediumLegLeft?: number | null;     
  distalLegRight?: number | null;    
  distalLegLeft?: number | null;     
  legRight?: number | null;          
  legLeft?: number | null;           
  armRight?: number | null;          
  armLeft?: number | null;           
  chestRight?: number | null;        
  chestLeft?: number | null;   
}

interface GetAppointmentBodyDataServiceResponse {
  appointment_body_data: AppointmentBodyData
}

export class GetAppointmentBodyDataService {
  constructor(private appointmentBodyDataRepository: IAppointmentsBodyRepository) { }

  async execute({
    id,
  }: GetAppointmentBodyDataServiceRequest): Promise<GetAppointmentBodyDataServiceResponse> {
    const appointmentData = await this.appointmentBodyDataRepository.findByAppointmentId(id)
    if (!appointmentData) throw new ResourceNotFoundError()
    return {
      appointment_body_data: { ...appointmentData }
    }
  }
}

