import { User, Prisma } from '@prisma/client'
import { IUsersRepository } from '../interfaces/iusers-repository'
import { UserAlreadyExistsError } from '@/services/errors/user-already-exists-error'

export class InMemoryUsersRepository implements IUsersRepository {
  public items: User[] = []

  async create(data: Prisma.UserCreateInput): Promise<User> {
    const userExists = await this.findByEmail(data.email)

    if (userExists) throw new UserAlreadyExistsError()

    const user = {
      id: String(this.items.length + 1),
      ...data,
      created_at: new Date(),
      updated_at: new Date(),
    } as User

    this.items.push(user)

    return user
  }

  async findByEmail(email: string): Promise<User | null> {
    const user = this.items.find((item) => item.email === email)

    if (!user) {
      return null
    }

    return user
  }
}
