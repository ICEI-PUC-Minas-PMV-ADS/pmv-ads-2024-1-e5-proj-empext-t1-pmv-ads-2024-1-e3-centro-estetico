import { api } from '@/lib/axios'

interface HealthQuestionnaire {
  clientId: string;
  aestheticProcedure: boolean;
  aestheticProcedureDescription?: string;
  cicatrization: boolean;
  diabetes: boolean;
  diabetesIsControlled: boolean;
  medicationUse: boolean;
  medicationUseDescription?: string;
  roaccutane: boolean;
  medicalTreatment: boolean;
  medicalTreatmentDescription?: string;
  thrombosis: boolean;
  surgery: boolean;
  surgeryDescription?: string;
  oncologicalHistory: boolean;
  infectiousDisease: boolean;
  infectiousDiseaseDescription?: string;
  practiceSports: boolean;
  practiceSportsDescription?: string;
  balancedDiet: boolean;
  drinkWater: string;
  alcohol: boolean;
  drugs: boolean;
  hormonalDisorder: boolean;
  smoke: boolean;
  sleep: boolean;
  bowelFunction: boolean;
  hypertension: boolean;
  hypertensionIsControlled: boolean;
  hypotension: boolean;
  hypotensionIsControlled: boolean;
  cardiacIssues: boolean;
  cardiacIssuesDescription?: string;
  depression: boolean;
  epilepsy: boolean;
  platesPins: boolean;
  platesPinsDescription?: string;
  dentalProsthesis: boolean;
  kidneyProblem: boolean;
  liverProblem: boolean;
  thyroidProblem: boolean;
  autoImmuneDisease: boolean;
  pregnant: boolean;
  breastfeeding: boolean;
  sunExposure: boolean;
  skinCare: boolean;
  methacrylOrBotulinumToxin: boolean;
  allergyHistory: boolean;
  sunscreen: boolean;
  herpes: boolean;
  contraceptive: boolean;
  menstrualCycle: boolean;
  hormones: boolean;
  acidSkin: boolean;
  cosmetic: boolean;
  cosmeticDescription?: string;
  authorizePhotos: boolean;
}


export async function postHealthQuestionary(data: HealthQuestionnaire) {
  await api.post('/health-questionary', { ...data, user_type: 'Client' })
}
