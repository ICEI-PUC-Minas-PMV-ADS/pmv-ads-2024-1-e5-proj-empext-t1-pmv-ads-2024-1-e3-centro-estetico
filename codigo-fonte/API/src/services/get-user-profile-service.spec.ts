import { InMemoryUsersRepository } from '@/repositories/in-memory/in-memory-users-repository'
import { expect, describe, it, beforeEach } from 'vitest'
import { hashPassword } from '@/utils/hash-password'
import {
  GetUserProfileService,
  GetUserProfileServiceRequest,
} from './get-user-profile-service'
import { ResourceNotFoundError } from './errors/resource-not-found-error'

let userInput: GetUserProfileServiceRequest
let usersRepository: InMemoryUsersRepository
let subject: GetUserProfileService

describe('Get User Profile Service', async () => {
  beforeEach(async () => {
    usersRepository = new InMemoryUsersRepository()
    subject = new GetUserProfileService(usersRepository)

    const { id } = await usersRepository.create({
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
      userId: id,
    }
  })

  it('should be able to get the user profile', async () => {
    const response = await subject.execute(userInput)

    expect(response.user.id).toEqual(userInput.userId)
    expect(response.user.name).toEqual('John Doe')
    expect(response.user.email).toEqual('john@example.com')
  })

  it('should not be able to get the user profile using an invalid id', async () => {
    await expect(() =>
      subject.execute({
        userId: 'invalid-id',
      }),
    ).rejects.toBeInstanceOf(ResourceNotFoundError)
  })
})
