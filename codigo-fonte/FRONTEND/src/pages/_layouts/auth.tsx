import { Outlet } from 'react-router-dom'

export function AuthLayout() {
  return (
    <div>
      <header>
        <h1>Auth</h1>
      </header>

      <main>
        <Outlet />
      </main>
    </div>
  )
}
