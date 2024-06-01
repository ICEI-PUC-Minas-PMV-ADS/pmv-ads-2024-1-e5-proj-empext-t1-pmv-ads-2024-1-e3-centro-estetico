export function FacialFormFactory (response: any) {

 return  {
    ...response.data,
    "skinInvolution": {
      "skinInvolutionLine": {
          "type": response.data.skinInvolutionLine !== null  ? "Linhas" : undefined,
          "typeDescription": response.data.skinInvolutionLine ?? undefined
      },
      "skinInvolutionSulcus": {
          "type": response.data.skinInvolutionSulcus !== null ? "Sulcus" : undefined,
          "typeDescription": response.data.skinInvolutionSulcus ?? undefined
      }
    },
    "scars":{
      scarsHypertrophic: {type:  response.data.scarsHypertrophic  ? "Hipertrófica" : undefined },
      scarsHypotrophic: {type:  response.data.scarsHypotrophic  ? "Hipotrófica" : undefined, typeDescription: response.data.scarsHypotrophic ?? undefined },
      scarsKeloid: {type: response.data.scarsKeloid  ? "Quelóide": undefined, typeDescription: response.data.scarsKeloid  ?? undefined  }
    },
    bloodVessels: {
      bloodVesselsAnemicNevus: {
        type: response.data.bloodVesselsAnemicNevus ? "Nevo anêmico" : undefined
      },
      bloodVesselsCouperose: {
        type: response.data.bloodVesselsCouperose ? "Couperose" : undefined,
        typeDescription: response.data.bloodVesselsCouperose ?? undefined
      },
      bloodVesselsCyanosis: {
        type: response.data.bloodVesselsCyanosis ? "Cianose" : undefined
      },
      bloodVesselsErythema: {
        type: response.data.bloodVesselsErythema ? "Eritema" : undefined
      },
      bloodVesselsHypertrophic: {
        type: response.data.bloodVesselsHypertrophic ? "Hipertrófica" : undefined
      },
      bloodVesselsHypotrophic: {
        type: response.data.bloodVesselsHypotrophic ? "Hipotrófica" : undefined,
        typeDescription: response.data.bloodVesselsHypotrophic ?? undefined
      },
      bloodVesselsKeloid: {
        type: response.data.bloodVesselsKeloid ? "Quelóide" : undefined
      },
      bloodVesselsNerve: {
        type: response.data.bloodVesselsNerve ? "Nervo vascular" : undefined,
        typeDescription: response.data.bloodVesselsNerve ?? undefined
      },
      bloodVesselsTelangiectasias: {
        type: response.data.bloodVesselsTelangiectasias ? "Telangiectasias" : undefined
      }
    },
    others: response.data.others ?? undefined,
    skinColors:  response.data.skinColors ?? undefined
    }

}
