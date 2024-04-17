import { Outlet } from 'react-router-dom'
import { useTitle } from '../../hooks/useTitle';
import { Header } from '@/components/header';


export function AppLayout() {

  const { title } = useTitle();

  return (
    
      <div className="flex min-h-screen flex-col antialiased">
        <Header page={title} />
        <div className="flex flex-1 flex-col gap-4 p-4 pt-6">
          <Outlet />
        </div>
      </div>
  )
}
