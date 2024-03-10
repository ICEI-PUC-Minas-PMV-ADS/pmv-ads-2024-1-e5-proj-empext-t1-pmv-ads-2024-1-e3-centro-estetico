import { hash } from 'bcryptjs'

export async function hashPassword(password: string, rounds: number = 6) {
  return hash(password, rounds)
}
