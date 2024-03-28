import { User } from "../models/User"

export const UserDetails = ({user}: {user?: User}) => {
  return <>
    <h3>UserDetails</h3>
    <dl>
        <dt>ID</dt>
        <dd>{user?.id}</dd>
        <dt>Name</dt>
        <dd>{user?.name}</dd>
        <dt>EMail</dt>
        <dd>{user?.email}</dd>
    </dl>
  </>
  
}
