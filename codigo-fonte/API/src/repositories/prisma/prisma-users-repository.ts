import { prisma } from '@/lib/prisma'
import { Prisma, User } from '@prisma/client'
import { IUsersRepository } from '../interfaces/iusers-repository'
import { UserAlreadyExistsError } from '@/services/errors/user-already-exists-error'

export class PrismaUsersRepository implements IUsersRepository {
  async create(data: Prisma.UserCreateInput): Promise<User> {
    const userExists = await this.findByEmail(data.email)

    if (userExists) throw new UserAlreadyExistsError()

    const user = await prisma.user.create({ data })

    return user
  }

  async findByEmail(email: string): Promise<User | null> {
    return await prisma.user.findUnique({
      where: {
        email,
      },
    })
  }

  async findById(id: string): Promise<User | null> {
    return await prisma.user.findUnique({
      where: {
        id,
      },
    })
  }

  async findByName(username: string): Promise<User[] | null> {
    const users = await prisma.user.findMany({
      where: {
        name: {
          mode: 'insensitive',
          contains: username
        },
        user_type: 'Client'
      }
    });
    return users;
  }
}
