import { NavLink } from "react-router-dom"
import { navData } from "../store/navData"

export const Navigation = () => {
  return (
    <nav>
    <div>Navigation</div>
    <ul>
        {navData.map((nav) => <li key={nav.href}><NavLink to={nav.href}>{nav.name}</NavLink></li>)}
    </ul>
    </nav>
  )
}
