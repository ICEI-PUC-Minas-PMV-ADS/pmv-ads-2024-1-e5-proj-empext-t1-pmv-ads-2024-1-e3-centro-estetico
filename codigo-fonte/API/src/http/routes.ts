import { FastifyInstance } from 'fastify'
import { authenticate } from './controllers/authenticate'
import { clientRegister } from './controllers/client-register'
import { userProfile } from './controllers/user-profile'
import { userRegister } from './controllers/user-register'
import { clients } from './controllers/clients'
import { createAppointment } from './controllers/create-appointment'
import { verifyJWT } from './middlewares/verify-jwt'

export async function appRoutes(app: FastifyInstance) {
  app.get('/clients', clients)
  app.post('/clients', clientRegister)

  app.post('/users', userRegister)
  app.post('/sessions', authenticate)

  // Authenticated Routes
  app.get('/me', { onRequest: [verifyJWT] }, userProfile)
  // app.get('/users', { onRequest: [verifyJWT] }, users)
  app.post('/appointments', { onRequest: [verifyJWT] }, createAppointment)
}
