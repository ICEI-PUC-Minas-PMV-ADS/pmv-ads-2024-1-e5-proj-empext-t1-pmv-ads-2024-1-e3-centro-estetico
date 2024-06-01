export function FacialFormFactory (data: any) {

 return  {
    ...data,
    "skinInvolution": {
      "skinInvolutionLine": {
          "type": data.skinInvolutionLine !== null  ? "Linhas" : undefined,
          "typeDescription": data.skinInvolutionLine ?? undefined
      },
      "skinInvolutionSulcus": {
          "type": data.skinInvolutionSulcus !== null ? "Sulcus" : undefined,
          "typeDescription": data.skinInvolutionSulcus ?? undefined
      }
    },
    "scars":{
      scarsHypertrophic: {type:  data.scarsHypertrophic  ? "Hipertrófica" : undefined },
      scarsHypotrophic: {type:  data.scarsHypotrophic  ? "Hipotrófica" : undefined, typeDescription: data.scarsHypotrophic ?? undefined },
      scarsKeloid: {type: data.scarsKeloid  ? "Quelóide": undefined, typeDescription: data.scarsKeloid  ?? undefined  }
    },
    bloodVessels: {
      bloodVesselsAnemicNevus: {
        type: data.bloodVesselsAnemicNevus ? "Nevo anêmico" : undefined
      },
      bloodVesselsCouperose: {
        type: data.bloodVesselsCouperose ? "Couperose" : undefined,
        typeDescription: data.bloodVesselsCouperose ?? undefined
      },
      bloodVesselsCyanosis: {
        type: data.bloodVesselsCyanosis ? "Cianose" : undefined
      },
      bloodVesselsErythema: {
        type: data.bloodVesselsErythema ? "Eritema" : undefined
      },
      bloodVesselsHypertrophic: {
        type: data.bloodVesselsHypertrophic ? "Hipertrófica" : undefined
      },
      bloodVesselsHypotrophic: {
        type: data.bloodVesselsHypotrophic ? "Hipotrófica" : undefined,
        typeDescription: data.bloodVesselsHypotrophic ?? undefined
      },
      bloodVesselsKeloid: {
        type: data.bloodVesselsKeloid ? "Quelóide" : undefined
      },
      bloodVesselsNerve: {
        type: data.bloodVesselsNerve ? "Nervo vascular" : undefined,
        typeDescription: data.bloodVesselsNerve ?? undefined
      },
      bloodVesselsTelangiectasias: {
        type: data.bloodVesselsTelangiectasias ? "Telangiectasias" : undefined
      }
    },
    others: data.others ?? undefined,
    skinColors:  data.skinColors ?? undefined
    }

}
