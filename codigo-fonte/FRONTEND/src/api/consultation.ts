import { api } from '@/lib/axios'

export interface Consultation {
  local: 'OnSight' | 'InHome'
  specialty: string,
  client: string,
  hour: string,
  annotations?: string;
  consultationType: string,
  date: Date
}

export async function postConsultation(data: Consultation) {
  //
}
