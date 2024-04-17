import { FastifyInstance } from 'fastify'
import { authenticate } from './controllers/authenticate'
import { clientRegister } from './controllers/client-register'
import { userProfile } from './controllers/user-profile'
import { userRegister } from './controllers/user-register'
import { clients } from './controllers/clients'
import { verifyJWT } from './middlewares/verify-jwt'

export async function appRoutes(app: FastifyInstance) {
  app.post('/users', userRegister)
  app.post('/sessions', authenticate)
  app.post('/clients', clientRegister)

  // Authenticated Routes
  app.get('/me', { onRequest: [verifyJWT] }, userProfile)
  // app.get('/users', { onRequest: [verifyJWT] }, users)
  app.get('/clients', clients)
}
