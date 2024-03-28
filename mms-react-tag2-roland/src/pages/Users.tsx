import { UserListing } from "../components/UserListing"
import { UserService } from "../services/UserService"

export const Users = () => {

  return <>
    <h1>Users</h1>
    <UserListing users={UserService.GetUsers()} />
  </>
  
}
