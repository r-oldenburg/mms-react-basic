import React from 'react'
import { navData } from '../../store/navData'
import NavItem from './NavItem'

const Navigation = () => {

    const NavList = navData.map((item)=>{

        return <NavItem key={item.id} name={item.name} href={item.href}/>
    })
  return (
    <nav>
      {NavList}
    </nav>
  )
}

export default Navigation
