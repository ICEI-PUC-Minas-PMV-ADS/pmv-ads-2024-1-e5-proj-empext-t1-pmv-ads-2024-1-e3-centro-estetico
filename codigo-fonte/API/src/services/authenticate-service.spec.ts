import { InMemoryUsersRepository } from '@/repositories/in-memory/in-memory-users-repository'
import { expect, describe, it, beforeEach, afterEach } from 'vitest'
import {
  AuthenticateService,
  AuthenticateServiceRequest,
} from './authenticate-service'
import { hashPassword } from '@/utils/hash-password'
import { InvalidCredentialsError } from './errors/invalid-credentials-error'

let userInput: AuthenticateServiceRequest
let usersRepository: InMemoryUsersRepository
let subject: AuthenticateService

describe('User Register Service', async () => {
  beforeEach(async () => {
    usersRepository = new InMemoryUsersRepository()
    subject = new AuthenticateService(usersRepository)

    usersRepository.create({
      name: 'John Doe',
      birth_date: new Date(),
      address: '123 Main St',
      marital_status: 'Single',
      email: 'john@example.com',
      phone: '1234567890',
      gender: 'Male',
      user_type: 'Client',
      password_hash: await hashPassword('password'),
    })

    userInput = {
      email: 'john@example.com',
      password: 'password',
    }
  })

  // Tear down the usersRepository.items array after each test
  afterEach(async () => {
    usersRepository.items = []
  })

  it('should be able to authenticate', async () => {
    const response = await subject.execute(userInput)

    expect(response.user.email).toEqual('john@example.com')
  })

  it('should not be able to authenticate with wrong email', async () => {
    await expect(() =>
      subject.execute({
        email: 'invalid-email',
        password: 'password',
      }),
    ).rejects.toBeInstanceOf(InvalidCredentialsError)
  })

  it('should not be able to authenticate with wrong password', async () => {
    await expect(() =>
      subject.execute({
        email: 'john@example.com',
        password: 'invalid-password',
      }),
    ).rejects.toBeInstanceOf(InvalidCredentialsError)
  })
})
