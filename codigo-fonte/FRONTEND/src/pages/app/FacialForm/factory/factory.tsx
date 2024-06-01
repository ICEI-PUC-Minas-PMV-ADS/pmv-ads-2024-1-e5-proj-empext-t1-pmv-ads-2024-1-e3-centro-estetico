export function FacialFormFactory (data: any) {

 return  {...data,
  "skinInvolution": {
    "skinInvolutionLine": {
        "type": data.skinInvolutionLine !== null,
        "typeDescription": data.skinInvolutionLine ?? undefined
    },
    "skinInvolutionSulcus": {
        "type": data.skinInvolutionSulcus !== null,
        "typeDescription": data.skinInvolutionSulcus ?? undefined
    }
  }
}

}
