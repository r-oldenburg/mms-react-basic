import { useParams } from "react-router-dom"
import { UserDetails } from "../components/UserDetails"
import { UserService } from "../services/UserService"

export const User = () => {
  const params = useParams()

  return <>
    <h1>User Details Page</h1>
    <UserDetails user={UserService.GetUserDetails(params.id)} />
  </>
}
