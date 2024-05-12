import { api } from '@/lib/axios'

interface HealthQuestionnaire {
  clientId: string;
  problem_description?: string;
  aesthetic_procedure: boolean;
  aesthetic_procedure_description?: string;
  cicatrization: boolean;
  diabetes: boolean;
  diabetes_is_controlled?: string;
  medication_use: boolean;
  medication_use_description?: string;
  roaccutane: boolean;
  medical_treatment: boolean;
  medical_treatment_description?: string;
  thrombosis: boolean;
  surgery: boolean;
  surgery_description?: string;
  oncological_history: boolean;
  infectious_disease: boolean;
  infectious_disease_description?: string;
  practice_sports: boolean;
  practice_sports_description?: string;
  balanced_diet: boolean;
  alcohol: boolean;
  drugs: boolean;
  hormonal_disorder: boolean;
  smoke: boolean;
  sleep: boolean;
  bowel_function: boolean;
  hypertension: boolean;
  hypertension_is_controlled?: string;
  hypotension: boolean;
  hypotension_is_controlled?: string;
  cardiac_issues: boolean;
  cardiac_issues_description?: string;
  depression: boolean;
  epilepsy: boolean;
  plates_pins: boolean;
  plates_pins_description?: string;
  dental_prosthesis: boolean;
  kidney_problem: boolean;
  kidney_problem_description?: string;
  liver_problem: boolean;
  thyroid_problem: boolean;
  auto_immune_disease: boolean;
  pregnant: boolean;
  breastfeeding: boolean;
  sun_exposure: boolean;
  sun_care: boolean;
  skin_care: boolean;
  methacryl_or_botulinum_toxin: boolean;
  allergy_history: boolean;
  herpes: boolean;
  contraceptive: boolean;
  menstrual_cycle: boolean;
  hormones: boolean;
  acid_skin: boolean;
  cosmetic: boolean;
  cosmetic_description?: string;
  drink_water: string;
  authorize_photos?: boolean;
  authorize_data: boolean;
  
}


export async function createHealthQuestionary(data: HealthQuestionnaire) {
  await api.post('/health-questionnairies', { ...data, user_type: 'Client' })
}
