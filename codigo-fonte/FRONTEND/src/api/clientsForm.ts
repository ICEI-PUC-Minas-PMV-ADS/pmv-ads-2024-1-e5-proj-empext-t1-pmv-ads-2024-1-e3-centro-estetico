import { api } from '@/lib/axios'

export interface SignUpBody {
  name: string
  birth_date: Date
  address: string
  marital_status: 'Married' | 'Single' | 'Divorced'
  email: string
  phone: string
  gender: 'Male' | 'Female'
  additional_information?: string
  password: string
}

interface SkinWithDescription {
  type: string;
  typeDescription?: string;
}

interface SkinAnalysis {
  clientId: string;
  skinPhototypes?: string; // Fototipo
  skinColors?: string; // Coloração
  dehydrationLevels?: string; // Desidratação
  skinTextures?: string; // Textura
  poreSizes?: string; // Óstios
  skinTypes?: string; // Tipo Cutâneo
  oilinessLevels?: string; // Grau de Oleosidade
  acneGrades?: string; // Grau de Acne
  skinInvolution?: { [key: string]: SkinWithDescription } // Involucao cutanea
  skinContains?: string[]; // Presenca De
  hypotonias?: string; // Hipotonia
  tyrichosis?: string[]; // Tricose
  scars?: { [key: string]: SkinWithDescription }; // Cicatrizes
  purpuricSpots?: string[]; // Manchas Purpúricas
  pigmentedSpots?: string[]; // Manchas Pigmentares
  melanotics?: string[]; // Melanóticas
  notMelanotics?: string[]; // Não Melanóticas
  skinLesions?: string[]; // Lesões Cutâneas
  fluidSkinLesions?: string[]; // Lesões Cutâneas liquidas
  bloodVessels?: { [key: string]: SkinWithDescription }; // Vasos Sanguíneos
  others?: string; // Outros
  additionalInformation?: string; // Observações
}

export async function signUp(data: SignUpBody) {
  await api.post('/users', { ...data, user_type: 'Client' })
}

export async function registerSkinForm(data: SkinAnalysis) {
  await api.post(`/skin-form?clientId=${data.clientId}`, data)
}
