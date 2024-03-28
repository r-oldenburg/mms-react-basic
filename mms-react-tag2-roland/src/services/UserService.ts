import { User } from "../models/User";
import { userData } from "../store/userData";

const URL = 'https://jsonplaceholder.typicode.com/users';

export const UserService = {
    GetUsers: function() : User[] {
        return userData;
    },
    GetUsersAsync: async function(abort: AbortController) : Promise<User[]> {
        return (await fetch(URL, {signal: abort.signal})).json();
    },
    GetUserDetails: function(id?: string) : User | undefined {
        return userData.find((user) => user?.id == Number(id));
    },
    GetUserDetailsAsync: async (id: string | undefined, abort: AbortController) : Promise<User | undefined> => {
        return (await fetch(`${URL}/${id}`, {signal: abort.signal})).json();
    },
}