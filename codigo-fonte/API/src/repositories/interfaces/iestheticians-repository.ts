import { Prisma, User } from '@prisma/client'

export interface IEstheticiansRepository {
  create(data: Prisma.UserCreateInput): Promise<User>
  findByEmail(email: string): Promise<User | null>
  findById(id: string): Promise<User | null>
  findByName(name: string): Promise<User[] | null>
}
