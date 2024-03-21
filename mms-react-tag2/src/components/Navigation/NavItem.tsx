import { NavLink } from 'react-router-dom'

type NavItemType = {
  name: string,
  href: string
}
const NavItem = ({ name, href }: NavItemType) => {
  return (
    <NavLink to={href}>
      {name}
    </NavLink>
  )
}

export default NavItem
