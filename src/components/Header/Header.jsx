import { NavLink } from 'react-router-dom'
import './Header.css'

const Header = () => {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <NavLink to='/'>Personajes</NavLink>
          </li>
          <li>
            <NavLink to='/game'>Juego</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  )
}
export default Header
