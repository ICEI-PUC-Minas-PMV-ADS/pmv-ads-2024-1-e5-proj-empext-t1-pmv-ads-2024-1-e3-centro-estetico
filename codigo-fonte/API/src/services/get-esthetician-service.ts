import { IEstheticiansRepository } from '@/repositories/interfaces/iestheticians-repository'
import { ResourceNotFoundError } from './errors/resource-not-found-error'

export interface GetEstheticianServiceRequest {
  user_email: string
}

type user = {
  id: string
  name: string
  email: string
  address: string 
  phone: string
}

interface GetEstheticianServiceResponse {
  user: user
}

export class GetEstheticianService {
  constructor(private estheticiansRepository: IEstheticiansRepository) {}

  async execute({
    user_email,
  }: GetEstheticianServiceRequest): Promise<GetEstheticianServiceResponse> {
    const user = await this.estheticiansRepository.findByEmail(user_email)
    if (!user) throw new ResourceNotFoundError()

    return {
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
        address: user.address,
        phone: user.phone
      },
    }
  }
}