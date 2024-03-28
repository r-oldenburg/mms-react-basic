import { useEffect, useState } from "react"
import { UserService } from "../services/UserService"
import { User } from "../models/User";
import { UserDetails } from "./UserDetails";

export const UserDataExcercise = () => {

    const [users, setUsers] = useState<User[]>();
    const [isLoading, setIsLoading] = useState(false);
    const controller = new AbortController();

    async function processEffect() {
        setIsLoading(true)
        const users = await UserService.GetUsersAsync(controller)
        setUsers(users)
        setIsLoading(false)
    }

    // Fetch user data
    useEffect(() => {
        processEffect().catch((e) => {
            // log error
            console.log(e);
        });
        return () => controller.abort()
    }, []);

    console.log(users);

    return <div>
        <h2>UserDataExcercise</h2>
        { isLoading ? <p>Loading...</p> : users?.map((user) => <UserDetails key={user.id} user={user} />) }
    </div>
}
