import { HealthQuestionnaire } from "./questionary";

export interface HealthQuestion {
    title: string;
    description?: string;
    nameDescription?: keyof HealthQuestionnaire;
  }

export const questions:HealthQuestion[] = [


    {    
        title: "Já fez algum procedimento estético antes, ou dermatológico?",
        description: "Quais?"
    },
    {
        title: "Tem problemas com cicatrização ou quelóide?"
    },
    {
        title: "Tem diabetes?",
        description: "É controlada?"
    },
    {
        title: "Faz uso de algum medicamento?",
        description: "Quais?"
    },
    {
        title: "Usou Isotretinoína (Roacutan) nos últimos 6 meses?"
    },
    {
        title: "Faz tratamento médico ou tem algum problema de saúde?",
        description: "Quais?"
    },
    {
        title: "Apresenta trombose?"
    },
    {
        title: "Já fez alguma cirurgia?",
        description: "Quais?"
    },
    {
        title: "Antecedente oncológico (câncer)?"
    },
    {
        title: "Doença infectocontagiosa?",
        description: "Quais?"
    },
    {
        title: "Prática de algum esporte?",
        description: "Quais?"
    },
    {
        title: "Alimentação balanceada?"
    },
    {
        title: "Ingestão de água por dia:"
    },
    {
        title: "Faz uso de bebida alcoólica?"
    },
    {
        title: "Faz uso de substância química ou entorpecentes?"
    },
    {
        title: "Distúrbio hormonal?"
    },
    {
        title: "Fuma?"
    },
    {
        title: "Dorme bem?"
    },
    {
        title: "Funcionamento intestinal regular?"
    },
    {
        title: "Hipertensão",
        description: "É controlada?"
    },
    {
        title: "Hipotensão",
        description: "É controlada?"
    },
    {
        title: "Tem problemas cardíacos?",
        description: "Quais?"
    },
    {
        title: "Depressão?"
    },
    {
        title: "Portador de epilepsias?"
    },
    {
        title: "Possui placas e pinos?",
        description: "Onde?"
    },
    {
        title: "Prótese dentária?"
    },
    {
        title: "Problema renal?",
        description: "Quais?"
    },
    {
        title: "Problemas hepáticos?"
    },
    {
        title: "Problemas de tireóide?"
    },
    {
        title: "Doença autoimune?"
    },
    {
        title: "Está grávida?"
    },
    {
        title: "Está amamentando?"
    },
    {
        title: "Exposição solar?"
    },
    {
        title: "Cuidados com a pele?"
    },
    {
        title: "Faz uso de Metacril ou toxina botulínica?"
    },
    {
        title: "Histórico de alergia?"
    },
    {
        title: "Faz uso regular de protetor solar?"
    },
    {
        title: "Já contraiu Herpes?"
    },
    {
        title: "Faz uso de anticoncepcional?"
    },
    {
        title: "Ciclo Menstrual:"
    },
    {
        title: "Faz uso de hormônio?"
    },
    {
        title: "Já fez ou faz uso de ácido na pele?"
    },
    {
        title: "Faz uso de algum cosmético?",
        description: "Quais?"
    },
    {
        title: "Autoriza divulgação de fotos antes e depois do tratamento?"
    }
];

// export default questions;