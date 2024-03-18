import { Outlet } from 'react-router-dom'

export function AppLayout() {
  return (
    <div>
      <header>
        <h1>APP</h1>
      </header>

      <main>
        <Outlet />
      </main>
    </div>
  )
}
