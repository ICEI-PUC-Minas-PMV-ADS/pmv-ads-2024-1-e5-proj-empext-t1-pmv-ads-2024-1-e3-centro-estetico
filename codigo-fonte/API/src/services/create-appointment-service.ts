import { IAppointmentsRepository } from "@/repositories/interfaces/iappointments-repository";

export type CreateAppointmentServiceType = {
  observations?: string | null;
  presencial: boolean;
  appointment_type: "Hair" | "Skin" | "Body";
  userId: string;
  clientId: string;
};

interface ICreateAppointmentService {
  execute: (
    appointmentInputData: CreateAppointmentServiceType
  ) => Promise<{ message: string }>;
}

export class CreateAppointmentService implements ICreateAppointmentService {
  constructor(private appointmentsRepository: IAppointmentsRepository) {}

  async execute(appointmentInputData: CreateAppointmentServiceType) {
    const appointmentData =
      await this.buildAppointmentData(appointmentInputData);

    await this.appointmentsRepository.create(appointmentData);
    return { message: "Appointment created successfully" };
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
    }

    return appointmentData;
  }
}
