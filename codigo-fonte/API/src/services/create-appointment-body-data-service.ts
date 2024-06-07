import { IAppointmentsBodyRepository } from "@/repositories/interfaces/iappointments-body-repository";

export type CreateAppointmentBodyDataServiceType = {
  appointmentId: string;
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
};

interface ICreateAppointmentBodyDataService {
  execute: (
    appointmentInputData: CreateAppointmentBodyDataServiceType
  ) => Promise<{ message: string }>;
}

export class CreateAppointmentBodyDataService implements ICreateAppointmentBodyDataService {
  constructor(private appointmentsRepository: IAppointmentsBodyRepository) {}

  async execute(appointmentInputData: CreateAppointmentBodyDataServiceType) {
    try {
      const appointmentData =
      await this.buildAppointmentData(appointmentInputData);

    await this.appointmentsRepository.create(appointmentData);
    } catch(error) {
      console.log(error)
    }
    return { message: "AppointmentBodyData created successfully" };

  }

  async buildAppointmentData(
    appointmentInputData: CreateAppointmentBodyDataServiceType
  ) {
    const { appointmentId, ...appointmentDataWithoutIds } =
      appointmentInputData;

    const appointmentData = {
      ...appointmentDataWithoutIds,
      Appointment: {
        connect: { id: appointmentId },
      }
    };

    return appointmentData;
  }
}
