import { api } from "@/lib/axios";

export interface Appointment {
  clientId: string;
  userId: string;
  specialty: string;
  observations?: string | null;
  appointment_date: Date;
  appointment_hour: string;
  presencial: boolean;
  appointment_type: string;
}

export type AppointmentSkinData = {
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

export type AppointmentBodyData = {
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


export async function createAppointment(data: Appointment) {
  return await api.post("/appointments", { ...data, user_type: "Client" });
}

export async function createAppointmentSkinData(data: AppointmentSkinData) {
  await api.post("/appointment-skin-data", { ...data });
}

export async function createAppointmentBodyData(data: AppointmentBodyData) {
  await api.post("/appointment-body-data", { ...data });
}

export async function getAppointmentsList(clientId: string) {
  const response = await api.get(`/appointments-list?clientId=${clientId}`)
  return response.data
}