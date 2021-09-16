import { NavLink } from 'react-router-dom'
import '../styles/Nav.sass'

const Header = () => {
  return (
    <li className="nav">
      <ul className="nav-item">
        <NavLink className="nav-link" exact to="/">
          Tasks
        </NavLink>
      </ul>
      <ul className="nav-item">
        <NavLink className="nav-link" exact to="/pomodoro">
          Focus
        </NavLink>
      </ul>
    </li>
  )
}

export default Header
