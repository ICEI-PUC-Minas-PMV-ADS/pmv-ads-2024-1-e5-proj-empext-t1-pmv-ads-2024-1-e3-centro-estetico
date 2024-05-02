import { IClientsRepository } from '@/repositories/interfaces/iclients-repository';
import { ISkinAnalysisRepository } from '@/repositories/interfaces/iskin-analysis-repository';
import { ResourceNotFoundError } from './errors/resource-not-found-error';

export interface SkinWithDescription {
  type?: string;
  typeDescription?: string;
}

export interface PostSkinFormServiceType {
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

interface IPostSkinFormService {
  execute: (
    skinFormInputData: PostSkinFormServiceType,
    clientId?: string,
  ) => Promise<{ message: string }>
}

export class PostSkinFormService implements IPostSkinFormService {
  constructor(private skinAnalysisRepository: ISkinAnalysisRepository,
              private clientsRepository: IClientsRepository) {}

  async execute(skinFormInputData: PostSkinFormServiceType, clientId?: string) {
    const skinFormData = await this.buildSkinFormData(skinFormInputData);
console.log(`ENTROU`, clientId)

    if (!clientId) throw new ResourceNotFoundError()
    const client = await this.clientsRepository.findById(clientId)
    if (!client) throw new ResourceNotFoundError()

    await this.skinAnalysisRepository.create({
      ...skinFormData,
      Client: { connect: client },
    })

    return { message: 'SkinAnalysis created successfully' }
  }

  async buildSkinFormData(skinFormData: PostSkinFormServiceType) {
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
