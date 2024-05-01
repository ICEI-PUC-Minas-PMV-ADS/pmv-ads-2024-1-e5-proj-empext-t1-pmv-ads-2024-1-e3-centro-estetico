export const skinPhotoTypes = [
  { id: '1', label: 'I/II Branca' },
  { id: '2', label: 'III Morena clara' },
  { id: '3', label: 'IV Morena moderada' },
  { id: '4', label: 'V Morena escura' },
  { id: '5', label: 'VI Negra' },
  { id: '6', label: 'Outro' },
];

export const skinColors = [
  { id: '1', label: 'Pálida' },
  { id: '2', label: 'Vermelha' },
  { id: '3', label: 'Cianótica' },
  { id: '4', label: 'Amarelada' },
];

export const dehydrationLevels = [
  { id: '1', label: 'Superficial' },
  { id: '2', label: 'Hidratação normal' },
  { id: '3', label: 'Profunda' },
];

export const skinTextures = [
  { id: "1", label: 'Noraml' },
  { id: "2", label: 'Fina ou Lisa' },
  { id: "3", label: 'Áspera' },
  { id: "4", label: 'Espessa' },
]
export const poreSizes = [
  { id: "1", label: 'Imperceptíveis' },
  { id: "2", label: 'Dilatados' },
];
export const skinTypes = [
  { id: "1", label: 'Eudêmica / Normal' },
  { id: "2", label: 'Lipídica' },
  { id: "3", label: 'Alipídica' },
  { id: "4", label: 'Mista' },
  { id: "5", label: 'Seborréica' },
  { id: "6", label: 'Sensível' },
  { id: "7", label: 'Átona' },
  { id: "8", label: 'Edemaciada' },
  { id: "9", label: 'Asfictica' },
  { id: "1", label: 'Rosácea' },
];
export const oilinessLevels = [
  { id: "1", label: 'Equilibrado' },
  { id: "2", label: 'Aumentado' },
  { id: "3", label: 'Excessivo' },
];
export const acneGrades = [
  { id: "1", label: 'Grau I - Comedogênica' },
  { id: "2", label: 'Grau II - Pápulo-pustulosa' },
  { id: "3", label: 'Grau III - Nódulo-cística' },
  { id: "4", label: 'Grau IV - Conglobata' },
];
export const skinLesions = [
  { id: "1", label: "Pápula" },
  { id: "2", label: "Nódulo" },
  { id: "3", label: "Vegetação" },
  { id: "4", label: "Dermatite Papulosa Nigra" },
  { id: "5", label: "Ceratose" },
  { id: "6", label: "Mílio" },
  { id: "7", label: "Papiloma" },
  { id: "8", label: "Siringoma" },
  { id: "9", label: "Comedão" },
];

export const fluidSkinLesions = [
  { id: 'abscesso', label: 'Abscesso' },
  { id: 'cisto', label: 'Cisto' },
  { id: 'vesicula', label: 'Vesícula' },
  { id: 'pustula', label: 'Pústula' },
  { id: 'bolha', label: 'Bolha' },
];

export const skinContains = [
  { id: '1', label: 'Comedões' },
  { id: '2', label: 'Nódulos' },
  { id: '3', label: 'Pápulas' },
  { id: '4', label: 'Pústulas' },
  { id: '5', label: 'Cistos' },
 { id: '6', label: 'Abscesso' },


]

export const bloodVessels  = [
  { id: '1', label: "Nervo vascular", hasDescription: true,  typeDescription: "bloodVesselsDescriptionNerve" },
  { id: '2', label: "Telangiectasias", hasDescription: false,  typeDescription: "" },
  { id: '3', label: "Couperose", hasDescription: true,  typeDescription: "bloodVesselsDescriptionCouperose" },
  { id: '4', label: "Cianose", hasDescription: false, typeDescription: "" },
  { id: '5', label: "Nevo anêmico", hasDescription: false, typeDescription: ""},
  { id: '6', label: "Eritema", hasDescription: false, typeDescription: ""},
  { id: '7', label: "Hipotrófica", hasDescription: true, typeDescription: "bloodVesselsDescriptionHypotrophic"},
  { id: '8', label: "Hipertrófica",hasDescription: false, typeDescription: ""},
  { id: '9', label: "Quelóide", hasDescription: false, typeDescription: ""},
]

export const melanotics = [
  { id: '1', label: "Melanodérmica" },
  { id: '2', label: "Efélides" },
  { id: '3', label: "Melasma" },
  { id: '4', label: "Cloasma" },
  { id: '5', label: "Melanose" },
  { id: '6', label: "periorbicular" },
  { id: '7', label: "Nevo melanócito ou melanodérmico" }
]

export const notMelanotics = [
  { id: '1', label: "Não meianodérmica" },
  { id: '2', label: "Tatuagem" },
  { id: '3', label: "Micropigmentação" },
  { id: '4', label: "Petéquia" },
  { id: '5', label: "Hematoma" }
]

export const scars =
[
  { id: '1', label: "Hipotrófica", hasDescription: true, typeDescription: "scarsDescriptionHypotrophic" },
  { id: '2', label: "Hipertrófica", hasDescription: false },
  { id: '3', label: "Quelóide", hasDescription: true, typeDescription: "scarsDescriptionKeloid" },
]

export const tyrichosis =
[
  { id: '1', label: "Hipertricose" },
  { id: '2', label: "Foliculite" },
  { id: '3', label: "Hirsurtismohypotonias" },
]

export const skinInvolution =
[
  { id: '1', label: "Linhas", hasDescription: true, typeDescription: "skinInvolutionDescriptionLine"},
  { id: '2', label: "Sulcos", hasDescription: true, typeDescription: "skinInvolutionDescriptionSulcus" },
]

export const hypotonias =
[
  { id: '1', label: "Região nasogeniana" },
  { id: '2', label: "Submentoniana" },
  { id: '3', label: "Pescoço" },
]

export const purpuricSpots =
[
  { id: '1', label: "Vibice" },
  { id: '2', label: "Equimose" },
  { id: '3', label: "Petéquia" },
  { id: '4', label: "Hematoma" }
]

export const pigmentedSpots =
[
  { id: '1', label: "Acromia" },
  { id: '2', label: "Hipocromia" },
  { id: '3', label: "Hipercromia" }
]


export const others= [
  { id: '1', label: "Escamas" },
  { id: '2', label: "Crosta" },
  { id: '3', label: "Fotodermatoses" },
  { id: '4', label: "Lesão não identificada" }
]

// interface SkinWithDescription {
//   type: string;
//   typeDescription?: string;
// }
// interface SkinAnalysis {
//   skinPhototypes: string; // Fototipo
//   skinColors: string; // Coloração
//   dehydrationLevels: string; // Desidratação
//   skinTextures: string; // Textura
//   poreSizes: string; // Óstios
//   skinTypes: string; // Tipo Cutâneo
//   oilinessLevels: string; // Grau de Oleosidade
//   acneGrades: string; // Grau de Acne
//   skinInvolution: SkinWithDescription[]// Involucao cutanea
//   skinCotains: string[]; // Presenca De
//   hypotonias: string; // Hipotonia
//   tyrichosis: string[]; // Tricose
//   scars: SkinWithDescription[]; // Cicatrizes
//   purpuricSpots: string[]; // Manchas Purpúricas
//   pigmentedSpots: string[]; // Manchas Pigmentares
//   melanotics: string[]; // Melanóticas
//   notMelanotics: string[]; // Não Melanóticas
//   skinLesions: string[]; // Lesões Cutâneas
//   fluidSkinLesions: string[]; // Lesões Cutâneas liquidas
//   bloodVessels: SkinWithDescription[]; // Vasos Sanguíneos
//   others: string; // Outros
//   additionalInformation: string; // Observações

// }