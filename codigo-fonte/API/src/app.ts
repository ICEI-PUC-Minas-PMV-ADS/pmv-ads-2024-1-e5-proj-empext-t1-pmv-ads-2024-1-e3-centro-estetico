import fastify from 'fastify'
import cors from '@fastify/cors'
import { appRoutes } from './http/routes'
import { ZodError } from 'zod'
import { env } from './env'
import fastifyJwt from '@fastify/jwt'
import fastifyCookie from '@fastify/cookie'

export const app = fastify()

app.register(cors, {
  origin: env.CLIENT_URL,
  credentials: true,
})
app.register(fastifyCookie)
app.register(fastifyJwt, {
  secret: env.JWT_SECRET,
  cookie: {
    cookieName: 'auth',
    signed: false,
  },
})

app.register(appRoutes)

app.setErrorHandler((error, _, reply) => {
  if (error instanceof ZodError) {
    reply
      .code(400)
      .send({ message: 'Validation Error', issues: error.format() })
  }

  if (env.NODE_ENV !== 'production') console.error(error)
  else {
    // TODO: Send error to monitoring service: Sentry, Datadog, NewRelic, etc
  }

  reply.code(500).send({ message: 'Internal Server Error' })
})
