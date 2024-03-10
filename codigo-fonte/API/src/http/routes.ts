import { FastifyInstance } from 'fastify'
import { userRegister } from './controllers/user-register'
import { authenticate } from './controllers/authenticate'
import { userProfile } from './controllers/user-profile'
import { verifyJWT } from './middlewares/verify-jwt'

export async function appRoutes(app: FastifyInstance) {
  app.post('/users', userRegister)
  app.post('/sessions', authenticate)

  // Authenticated Routes
  app.get('/me', { onRequest: [verifyJWT] }, userProfile)
}
