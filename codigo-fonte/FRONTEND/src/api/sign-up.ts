import { api } from '@/lib/axios'

export interface SignUpBody {
  name: string
  birth_date: Date
  address: string
  marital_status: 'Married' | 'Single' | 'Divorced'
  email: string
  phone: string
  gender: 'Male' | 'Female'
  additional_information?: string
  password: string
}

export interface registerClientBody {
  name: string
  birth_date: Date
  address: string
  email: string
  phone: string
  gender: 'Male' | 'Female'
}

export async function signUp(data: SignUpBody) {
  await api.post('/users', { ...data, user_type: 'Client' })
}

export async function registerCLient(data: registerClientBody) {
  await api.post('/clients', data)
}
