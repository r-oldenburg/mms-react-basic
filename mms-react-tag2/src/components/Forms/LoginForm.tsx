import { useLocalStorage } from "@/hooks/useLocalStorage";
import { useState } from "react";

const LoginForm = () => {

    const local = useLocalStorage("user", {})
    console.log(local)

    const INITVALUES = {
        username: "",
        password: "",
        loggedIn: false
    }

    const [user, setUser] = useState(INITVALUES);

    function handleChange(e: { target: { value: string, name: string } }) {

        //setUser({ ...user, [e.target.name]: e.target.value })

        //alternative mit LAMDA => mehr Sicherheit bei mehrfacher Ansprache des gleichen useState
        // der SPREAD OPERATOR <...prev> erstellt eine ShallowCopy des vorherigen States
        setUser((prev) => ({ ...prev, [e.target.name]: e.target.value }))
    }


    function handleSubmit(e: { preventDefault: () => void }) {
        e.preventDefault() //button wird auf reset gesetzt
        console.log("submitted", user)
        user.loggedIn = true;
        local.setStoredValue(user)

    }

    function handleRemove() {
        local.removeStoredValue()
    }
    return (
        <div>
            <h2>Login form</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor="username">Username</label><br />
                <input
                    id="username"
                    type="text"
                    name="username"
                    value={user.username}
                    placeholder="username"
                    onChange={handleChange}
                /><br />
                <label htmlFor="password">Password</label><br />
                <input
                    id="password"
                    type="text"
                    name="password"
                    value={user.password}
                    onChange={handleChange}
                /><br />
                <button type="submit">Login</button>
            </form>

            <button onClick={handleRemove}>remove</button>
        </div>
    )
}

export default LoginForm
