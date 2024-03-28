import { useEffect, useState } from "react"
import { User } from "../models/User";
import { UserService } from "../services/UserService";
import { UserDetails } from "./UserDetails";

export const SingleUserExcercise = () => {

    const [user, setUser] = useState<User>();
    const [userId, setUserId] = useState(1);

    const controller = new AbortController();

    async function processEffect() {
        const user = await UserService.GetUserDetailsAsync(String(userId), controller);
        setUser(user);
    }

    useEffect(() => {
        processEffect().catch((e) => {
            // log error
            console.log(e);
        });
        return () => controller.abort()
     }, [userId]);

    function handleUserChange(e:any) {
        setUserId(e.target.id);
    }

    console.log(user);

    return (
        <div>
            <div id="1" className="userSelector" onClick={handleUserChange}>User 1</div>
            <div id="2" className="userSelector" onClick={handleUserChange}>User 2</div>
            <div id="3" className="userSelector" onClick={handleUserChange}>User 3</div>
            <br/>
            <br/>
            <p>Current user:</p>
            <UserDetails user={user}/>
        </div>
    )
}
