import { NavLink } from 'react-router-dom'
import { navData } from '../../store/navData'
import styles from './Navigation.module.css'


const Navigation = () => {

    const NavList = navData.map((item, index) => {

        return <NavLink
            key={item.name + index}
            to={item.href}
            className={({ isActive }) => isActive ? styles.active : styles.inActive} >
            {item.name}
        </NavLink>
    })

    console.log("NavList", NavList)

    return <nav>
        {NavList}
    </nav>
}

export default Navigation