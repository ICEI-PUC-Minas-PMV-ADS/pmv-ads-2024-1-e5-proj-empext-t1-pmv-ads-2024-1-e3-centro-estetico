import { prisma } from '@/lib/prisma'
import { Prisma } from '@prisma/client'

export class PrismaUsersRepository {
  constructor(private data: Prisma.UserCreateInput) {}

  async create() {
    const userExists = await prisma.user.findUnique({
      where: {
        email: this.data.email,
      },
    })

    if (userExists) throw new Error('User already exists')

    const user = await prisma.user.create({
      data: this.data,
    })

    return user
  }
}
