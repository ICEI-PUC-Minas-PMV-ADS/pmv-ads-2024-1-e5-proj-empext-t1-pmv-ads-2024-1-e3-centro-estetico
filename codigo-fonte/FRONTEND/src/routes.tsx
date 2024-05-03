import { createBrowserRouter } from 'react-router-dom'

import { AppLayout } from './pages/_layouts/app'
import { AuthLayout } from './pages/_layouts/auth'
import FacialForm from './pages/app/FacialForm'
import { Clients } from './pages/app/clients/clients'
import { Homepage } from './pages/app/homepage'
import { NotificationsForm } from './pages/app/notification'
import { PerfilClients } from './pages/app/perfil-clients'
import { RegisterClients } from './pages/app/register/RegisterClients'
import { SignIn } from './pages/auth/sign-in'
import { SignUp } from './pages/auth/sign-up'
import { Consultation } from './pages/app/consultation/consultation'


export const router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,

    children: [
      { path: '/', element: <Homepage /> },
      { path: '/notifications', element: <NotificationsForm /> },

      {
        path: '/users',
        element: <Clients />,
      },
      {
        path: '/register-users',
        element: <RegisterClients />
      },
      {
        path: '/perfil-users/:clientId',
        element: <PerfilClients />,
      },
      {
        path: '/consultation',
        element: <Consultation />
      },
      {
        path: '/facial-form/:clientId',
        element: <FacialForm />,
      },
    ],
  },
  {
    path: '/',
    element: <AuthLayout />,
    children: [
      { path: '/sign-in', element: <SignIn /> },
      { path: '/sign-up', element: <SignUp /> },
    ],
  },
])
