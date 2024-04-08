import { Client, Prisma } from '@prisma/client'

export interface IClientsRepository {
  create(data: Prisma.ClientCreateInput): Promise<Client>
  findByEmail(email: string): Promise<Client | null>
  findById(id: string): Promise<Client | null>
  findByName(name: string): Promise<Client[] | null>
}
