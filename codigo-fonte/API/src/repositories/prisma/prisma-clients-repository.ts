import { prisma } from '@/lib/prisma'
import { ClientAlreadyExistsError } from '@/services/errors/client-already-exists-error'
import { Client, Prisma } from '@prisma/client'
import { IClientsRepository } from '../interfaces/iclients-repository'

export class PrismaClientsRepository implements IClientsRepository {
  async create(data: Prisma.ClientCreateInput): Promise<Client> {
    const clientExists = await this.findByEmail(data.email)

    if (clientExists) throw new ClientAlreadyExistsError()

    const client = await prisma.client.create({ data })

    return client
  }

  async findByEmail(email: string): Promise<Client | null> {
    return await prisma.client.findUnique({
      where: {
        email,
      },
    })
  }

  async findById(id: string): Promise<Client | null> {
    return await prisma.client.findUnique({
      where: {
        id,
      },
    })
  }

  async findByName(name: string): Promise<Client[] | null> {
    const clients = await prisma.client.findMany({
      where: {
        name: {
          mode: 'insensitive',
          contains: name
        },
      }
    });
    return clients;
  }
}
