import { NavLink } from "react-router-dom"
import { User } from "../models/User"

export const UserListing = ({users} : {users: User[]}) => {
    console.log(users)
  return <>
    <div>UserListing</div>
    <ul>
        {users.map((user) => <li key={user.id}> <NavLink to={String(user.id)} >{user.name}</NavLink> </li>) }
    </ul>
  </>
}
