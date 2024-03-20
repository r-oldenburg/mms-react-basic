import UserItem from "./UserItem"
import { userData } from "../../store/userData"


const UserListing = () => {

    const UserList = userData.map((item) => {
        return <UserItem key={item.id} name={item.name} id={item.id} />
    })

    return (
        <div>
            <h2>Die Nutzerliste</h2>
            {UserList}
        </div>
    )
}

export default UserListing
