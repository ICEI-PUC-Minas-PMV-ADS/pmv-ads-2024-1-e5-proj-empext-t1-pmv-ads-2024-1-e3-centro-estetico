import { InMemoryUsersRepository } from '@/repositories/in-memory/in-memory-users-repository'
import { expect, describe, it, beforeEach, afterEach } from 'vitest'
import {
  UserRegisterService,
  UserRegisterServiceType,
} from './user-register-service'
import { compare } from 'bcryptjs'
import { UserAlreadyExistsError } from './errors/user-already-exists-error'
import { ZodError } from 'zod'

let userInput: UserRegisterServiceType
let usersRepository: InMemoryUsersRepository
let userRegisterService: UserRegisterService

describe('User Register Service', async () => {
  beforeEach(async () => {
    usersRepository = new InMemoryUsersRepository()
    userRegisterService = new UserRegisterService(usersRepository)
    userInput = {
      name: 'John Doe',
      birth_date: new Date(),
      address: '123 Main St',
      marital_status: 'Single',
      email: 'john@example.com',
      phone: '1234567890',
      gender: 'Male',
      user_type: 'Client',
      password: 'password',
    }
  })

  // Tear down the usersRepository.items array after each test
  afterEach(async () => {
    usersRepository.items = []
  })

  it('should hash the user password upon registration', async () => {
    const userData = await userRegisterService.buildUserData(userInput)

    const isPasswordCorrectlyHashed = await compare(
      'password',
      userData.password_hash,
    )

    expect(isPasswordCorrectlyHashed).toBe(true)
  })

  it('should not register users with the same email', async () => {
    await userRegisterService.execute(userInput)

    await expect(() =>
      userRegisterService.execute(userInput),
    ).rejects.toBeInstanceOf(UserAlreadyExistsError)
  })

  it('should not register a new user with an invalid email', async () => {
    const invalidUserInput = {
      ...userInput,
      email: 'invalid-email',
    }

    await expect(() =>
      userRegisterService.execute(invalidUserInput),
    ).rejects.toBeInstanceOf(ZodError)
  })

  it('should not register a new user with an invalid password', async () => {
    const invalidUserInput = {
      ...userInput,
      password: '12345',
    }

    await expect(() =>
      userRegisterService.execute(invalidUserInput),
    ).rejects.toBeInstanceOf(ZodError)
  })

  it('should not register a new user with an invalid birth date', async () => {
    const invalidUserInput = {
      ...userInput,
      birth_date: 'invalid-date',
    }

    await expect(() =>
      // @ts-expect-error: I'm testing an invalid date
      userRegisterService.execute(invalidUserInput),
    ).rejects.toBeInstanceOf(ZodError)
  })

  it('should register a new user', async () => {
    const serviceResponse = await userRegisterService.execute(userInput)

    expect(serviceResponse.message).toBe('User created successfully')
  })
})