import { IClientsRepository } from '@/repositories/interfaces/iclients-repository'
import { registerBodySchema } from '@/validations/client-validation'

export type ClientRegisterServiceType = {
  name: string
  birth_date: Date
  address: string
  email: string
  phone: string
  gender: 'Male' | 'Female'
  additional_information?: string
}

interface IClientRegisterService {
  execute: (clientInputData: ClientRegisterServiceType) => Promise<{ message: string }>
}

export class ClientRegisterService implements IClientRegisterService {
  constructor(private clientsRepository: IClientsRepository) {}

  async execute(clientInputData: ClientRegisterServiceType) {
    const clientData = await this.buildClientData(
      registerBodySchema.parse(clientInputData),
    )
    try{
    await this.clientsRepository.create(clientData)
    }catch(e){console.log("Error!!!!!", e)}
    return { message: 'Client created successfully' }
  }

  async buildClientData(clientInputData: ClientRegisterServiceType) {

    return clientInputData
  }
}
