import { IAppointmentsRepository } from "@/repositories/interfaces/iappointments-repository";

export type CreateAppointmentServiceType = {
  clientId: string;
  userId: string;
  specialty: string;
  observations?: string | null;
  appointment_date: Date;
  appointment_hour: string
  presencial: boolean;
  appointment_type: "Hair" | "Skin" | "Body";
};

interface ICreateAppointmentService {
  execute: (
    appointmentInputData: CreateAppointmentServiceType
  ) => Promise<{ message: string }>;
}

export class CreateAppointmentService implements ICreateAppointmentService {
  constructor(private appointmentsRepository: IAppointmentsRepository) {}
  async execute(appointmentInputData: CreateAppointmentServiceType) {
    let appointmentResponse = {id: ''};
    try {
      const appointmentData =
      await this.buildAppointmentData(appointmentInputData);

      appointmentResponse = await this.appointmentsRepository.create(appointmentData);
    } catch(error) {
      console.log(error)
    }
    return { 
      message: "Appointment created successfully" ,
      id: appointmentResponse.id
    };

  }

  async buildAppointmentData(
    appointmentInputData: CreateAppointmentServiceType
  ) {
    const { userId, clientId, ...appointmentDataWithoutIds } =
      appointmentInputData;

    const appointmentData = {
      ...appointmentDataWithoutIds,
      User: {
        connect: { id: userId },
      },
      Client: {
        connect: { id: clientId },
      },
    };

    return appointmentData;
  }
}
