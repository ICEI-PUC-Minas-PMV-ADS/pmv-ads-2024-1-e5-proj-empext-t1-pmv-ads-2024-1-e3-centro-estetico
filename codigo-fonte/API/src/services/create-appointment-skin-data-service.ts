import { IAppointmentsSkinRepository } from "@/repositories/interfaces/iappointments-skin-repository";

export type CreateAppointmentSkinDataServiceType = {
  appointmentId: string;
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

interface ICreateAppointmentSkinDataService {
  execute: (
    appointmentInputData: CreateAppointmentSkinDataServiceType
  ) => Promise<{ message: string }>;
}

export class CreateAppointmentSkinDataService implements ICreateAppointmentSkinDataService {
  constructor(private appointmentsRepository: IAppointmentsSkinRepository) {}

  async execute(appointmentInputData: CreateAppointmentSkinDataServiceType) {
    try {
      const appointmentData =
      await this.buildAppointmentData(appointmentInputData);

    await this.appointmentsRepository.create(appointmentData);
    } catch(error) {
      console.log(error)
    }
    return { message: "AppointmentSkinData created successfully" };

  }

  async buildAppointmentData(
    appointmentInputData: CreateAppointmentSkinDataServiceType
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
