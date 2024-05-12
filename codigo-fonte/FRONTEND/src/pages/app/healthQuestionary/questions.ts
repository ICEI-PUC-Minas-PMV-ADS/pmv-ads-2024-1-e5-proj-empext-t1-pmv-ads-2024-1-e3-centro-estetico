import { HealthQuestionnaire } from "./questionary";

export interface HealthQuestion {
    title: string;
    description?: string;
    name: keyof HealthQuestionnaire;
    nameDescription?: keyof HealthQuestionnaire;
  }

  export const questions: HealthQuestion[] = [
    {
        title: "Já fez algum procedimento estético antes, ou dermatológico?",
        description: "Quais?",
        name: 'aesthetic_procedure',
        nameDescription: 'aesthetic_procedure_description',
    },
    {
        title: "Tem problemas com cicatrização ou quelóide?",
        name: 'cicatrization',
    },
    {
        title: "Tem diabetes?",
        description: "É controlada?",
        name: 'diabetes',
        nameDescription: 'diabetes_is_controlled',
    },
    {
        title: "Faz uso de algum medicamento?",
        description: "Quais?",
        name: 'medication_use',
        nameDescription: 'medication_use_description',
    },
    {
        title: "Usou Isotretinoína (Roacutan) nos últimos 6 meses?",
        name: 'roaccutane',
    },
    {
        title: "Faz tratamento médico ou tem algum problema de saúde?",
        description: "Quais?",
        name: 'medical_treatment',
        nameDescription: 'medical_treatment_description',
    },
    {
        title: "Apresenta trombose?",
        name: 'thrombosis',
    },
    {
        title: "Já fez alguma cirurgia?",
        description: "Quais?",
        name: 'surgery',
        nameDescription: 'surgery_description',
    },
    {
        title: "Antecedente oncológico (câncer)?",
        name: 'oncological_history',
    },
    {
        title: "Doença infectocontagiosa?",
        description: "Quais?",
        name: 'infectious_disease',
        nameDescription: 'infectious_disease_description',
    },
    {
        title: "Prática de algum esporte?",
        description: "Quais?",
        name: 'practice_sports',
        nameDescription: 'practice_sports_description',
    },
    {
        title: "Alimentação balanceada?",
        name: 'balanced_diet',
    },
    {
        title: "Faz uso de bebida alcoólica?",
        name: 'alcohol',
    },
    {
        title: "Faz uso de substância química ou entorpecentes?",
        name: 'drugs',
    },
    {
        title: "Distúrbio hormonal?",
        name: 'hormonal_disorder',
    },
    {
        title: "Fuma?",
        name: 'smoke',
    },
    {
        title: "Dorme bem?",
        name: 'sleep',
    },
    {
        title: "Funcionamento intestinal regular?",
        name: 'bowel_function',
    },
    {
        title: "Hipertensão",
        description: "É controlada?",
        name: 'hypertension',
        nameDescription: 'hypertension_is_controlled',
    },
    {
        title: "Hipotensão",
        description: "É controlada?",
        name: 'hypotension',
        nameDescription: 'hypotension_is_controlled',
    },
    {
        title: "Tem problemas cardíacos?",
        description: "Quais?",
        name: 'cardiac_issues',
        nameDescription: 'cardiac_issues_description',
    },
    {
        title: "Depressão?",
        name: 'depression',
    },
    {
        title: "Portador de epilepsias?",
        name: 'epilepsy',
    },
    {
        title: "Possui placas e pinos?",
        description: "Onde?",
        name: 'plates_pins',
        nameDescription: 'plates_pins_description',
    },
    {
        title: "Prótese dentária?",
        name: 'dental_prosthesis',
    },
    {
        title: "Problema renal?",
        description: "Quais?",
        name: 'kidney_problem',
        nameDescription: 'kidney_problem_description',
    },
    {
        title: "Problemas hepáticos?",
        name: 'liver_problem',
    },
    {
        title: "Problemas de tireóide?",
        name: 'thyroid_problem',
    },
    {
        title: "Doença autoimune?",
        name: 'auto_immune_disease',
    },
    {
        title: "Está grávida?",
        name: 'pregnant',
    },
    {
        title: "Está amamentando?",
        name: 'breastfeeding',
    },
    {
        title: "Exposição solar?",
        name: 'sun_exposure',
    },
    {
        title: "Faz uso regular de protetor solar?",
        name: 'sun_care',
    },
    {
        title: "Cuidados com a pele?",
        name: 'skin_care',
    },
    {
        title: "Faz uso de Metacril ou toxina botulínica?",
        name: 'methacryl_or_botulinum_toxin',
    },
    {
        title: "Histórico de alergia?",
        name: 'allergy_history',
    },
    {
        title: "Já contraiu Herpes?",
        name: 'herpes',
    },
    {
        title: "Faz uso de anticoncepcional?",
        name: 'contraceptive',
    },
    {
        title: "Ciclo Menstrual é regular?",
        name: 'menstrual_cycle',
    },
    {
        title: "Faz uso de hormônio?",
        name: 'hormones',
    },
    {
        title: "Já fez ou faz uso de ácido na pele?",
        name: 'acid_skin',
    },
    {
        title: "Faz uso de algum cosmético?",
        description: "Quais?",
        name: 'cosmetic',
        nameDescription: 'cosmetic_description',
    }
];

// export default questions;