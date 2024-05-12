import { IAppointmentsRepository } from "@/repositories/interfaces/iappointments-repository";

export type CreateAppointmentServiceType = {
  clientId: string;
  userId: string;
  specialty: string;
  observations?: string | null;
  appointment_date: Date;
  presencial: boolean;
  appointment_type: "Hair" | "Skin" | "Body";
  leftFace0: boolean;
  leftFace1: boolean;
  leftFace2: boolean;
  leftFace3: boolean;
  leftFace4: boolean;
  leftFace5: boolean;
  leftFace6: boolean;
  leftFace7: boolean;
  leftFace8: boolean;
  leftFace9: boolean;
  leftFace10: boolean;
  rightFace0: boolean;
  rightFace1: boolean;
  rightFace2: boolean;
  rightFace3: boolean;
  rightFace4: boolean;
  rightFace5: boolean;
  rightFace6: boolean;
  rightFace7: boolean;
  rightFace8: boolean;
  rightFace9: boolean;
  rightFace10: boolean;
  frontFace0: boolean;
  frontFace1: boolean;
  frontFace2: boolean;
  frontFace3: boolean;
  frontFace4: boolean;
  frontFace5: boolean;
  frontFace6: boolean;
  frontFace7: boolean;
  frontFace8: boolean;
  frontFace9: boolean;
  frontFace10: boolean;
  frontFace11: boolean;
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
    };

    return appointmentData;
  }
}
