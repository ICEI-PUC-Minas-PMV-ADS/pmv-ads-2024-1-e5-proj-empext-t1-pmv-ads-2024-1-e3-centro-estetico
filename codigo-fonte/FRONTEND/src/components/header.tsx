import { AccountMenu } from './account-menu'
import { HeaderMenu } from './menu';
//import { NavLink } from './nav-link'

export function Header() {
  return (
    <div className="flex h-16 items-center gap-6 px-6 pt-5 justify-between">
      <HeaderMenu />
      <nav className="flex flex-col items-center font-bold text-blue-600 justify-self-center text-lg">
        <span>Bem vinda,</span>
        <span>Fátima</span>
      </nav>
      <AccountMenu />
    </div>
  )
}



// <NavLink to="/">
// <Home className="h-4 w-4" />
// Inicio
// </NavLink>
// <NavLink to="/users">
// <User className="h-4 w-4" />
// Clientes
// </NavLink>
