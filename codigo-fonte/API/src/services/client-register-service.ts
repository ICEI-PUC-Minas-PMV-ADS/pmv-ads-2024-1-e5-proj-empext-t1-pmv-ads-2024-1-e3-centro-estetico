import { IClientsRepository } from '@/repositories/interfaces/iclients-repository'
import { IUsersRepository } from '@/repositories/interfaces/iusers-repository'
import { registerBodySchema } from '@/validations/client-validation'
import { ResourceNotFoundError } from './errors/resource-not-found-error'

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
  execute: (
    clientInputData: ClientRegisterServiceType,
    userId: string
  ) => Promise<{ message: string }>
}

export class ClientRegisterService implements IClientRegisterService {
  constructor(private clientsRepository: IClientsRepository,
              private usersRepository: IUsersRepository) {}

  async execute(clientInputData: ClientRegisterServiceType, userId?: string) {
    const clientData = await this.buildClientData(
      registerBodySchema.parse(clientInputData),
    )
    if (!userId) throw new ResourceNotFoundError()
    const user = await this.usersRepository.findById(userId)
    if (!user) throw new ResourceNotFoundError()

    try{
    await this.clientsRepository.create({...clientData, User: { connect: user }})
    }catch(e){console.log("Error!!!!!", e)}
    return { message: 'Client created successfully' }
  }

  async buildClientData(clientInputData: ClientRegisterServiceType) {

    return clientInputData
  }
}
