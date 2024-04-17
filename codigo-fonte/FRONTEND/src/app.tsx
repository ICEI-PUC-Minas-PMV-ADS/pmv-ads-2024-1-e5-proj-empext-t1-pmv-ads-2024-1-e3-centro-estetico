import './global.css'

import { QueryClientProvider } from '@tanstack/react-query'
import { Helmet, HelmetProvider } from 'react-helmet-async'
import { RouterProvider } from 'react-router-dom'
import { Toaster } from 'sonner'

import { ThemeProvider } from './components/theme/theme-provider'
import { queryClient } from './lib/react-query'
import { router } from './routes'
import { TitleProvider } from './hooks/useTitle'

export function App() {
  return (
    <TitleProvider>
      <HelmetProvider>
        <ThemeProvider storageKey="fatimastyles-theme" defaultTheme="system">
          <Helmet titleTemplate="%s | Fatima Styles" />
          <Toaster richColors />
          <QueryClientProvider client={queryClient}>
            <RouterProvider router={router} />
          </QueryClientProvider>
        </ThemeProvider>
      </HelmetProvider>
    </TitleProvider>

  )
}
