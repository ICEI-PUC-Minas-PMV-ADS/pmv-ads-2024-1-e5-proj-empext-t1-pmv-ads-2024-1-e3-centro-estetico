import { ISkinAnalysisRepository } from '@/repositories/interfaces/iskin-analysis-repository';
import { ResourceNotFoundError } from './errors/resource-not-found-error';

export interface SkinWithDescription {
  type?: string;
  typeDescription?: string;
}

export interface UpdateSkinFormServiceType {
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
  hypotonias?: string[]; // Hipotonia
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

interface IUpdateSkinFormService {
  execute: (
    skinFormInputData: UpdateSkinFormServiceType,
    skinAnalysisId: string,
  ) => Promise<{ message: string }>
}

export class UpdateSkinFormService implements IUpdateSkinFormService {
  constructor(private skinAnalysisRepository: ISkinAnalysisRepository) {}

  async execute(skinFormInputData: UpdateSkinFormServiceType, skinAnalysisId: string) {
    const skinFormData = await this.buildSkinFormData(skinFormInputData);

    if (!skinAnalysisId) throw new ResourceNotFoundError()
    const skinAnalysis = await this.skinAnalysisRepository.findById(skinAnalysisId)
    if (!skinAnalysis) throw new ResourceNotFoundError()

    await this.skinAnalysisRepository.update({
      where: { id: skinAnalysisId },
      data: {
        ...skinFormData,
      }
    });


    return { message: 'SkinAnalysis modified successfully' }
  }

  async buildSkinFormData(skinFormData: UpdateSkinFormServiceType) {
    const data = {
      ...skinFormData,
      skinInvolutionLine: skinFormData.skinInvolution?.skinInvolutionLine.type ? skinFormData.skinInvolution.skinInvolutionLine.typeDescription : null,
      skinInvolutionSulcus: skinFormData.skinInvolution?.skinInvolutionSulcus.type ? skinFormData.skinInvolution.skinInvolutionSulcus.typeDescription : null,
      scarsHypertrophic: Boolean(skinFormData.scars?.scarsHypertrophic.type),
      scarsHypotrophic: skinFormData.scars?.scarsHypotrophic.type ? skinFormData.scars.scarsHypotrophic.typeDescription : null,
      scarsKeloid: skinFormData.scars?.scarsKeloid.type ? skinFormData.scars.scarsKeloid.typeDescription : null,
      bloodVesselsAnemicNevus: Boolean(skinFormData.bloodVessels?.bloodVesselsAnemicNevus.type),
      bloodVesselsCyanosis: Boolean(skinFormData.bloodVessels?.bloodVesselsCyanosis.type),
      bloodVesselsErythema: Boolean(skinFormData.bloodVessels?.bloodVesselsErythema.type),
      bloodVesselsHypertrophic: Boolean(skinFormData.bloodVessels?.bloodVesselsHypertrophic.type),
      bloodVesselsHypotrophic: skinFormData.bloodVessels?.bloodVesselsHypotrophic.type ? skinFormData.bloodVessels.bloodVesselsHypotrophic.typeDescription : null,
      bloodVesselsKeloid: Boolean(skinFormData.bloodVessels?.bloodVesselsKeloid.type),
      bloodVesselsTelangiectasias: Boolean(skinFormData.bloodVessels?.bloodVesselsTelangiectasias.type),
      bloodVesselsCouperose: skinFormData.bloodVessels?.bloodVesselsCouperose.type ? skinFormData.bloodVessels.bloodVesselsCouperose.typeDescription : null,
      bloodVesselsNerve: skinFormData.bloodVessels?.bloodVesselsNerve.type ? skinFormData.bloodVessels.bloodVesselsNerve.typeDescription : null,
    }
    delete data.skinInvolution;
    delete data.scars;
    delete data.bloodVessels;
    return data;
  }
}
