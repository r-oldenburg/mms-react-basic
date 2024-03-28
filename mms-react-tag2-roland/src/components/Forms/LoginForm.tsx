import { FormEvent, useState } from "react"
import { useLocalStorage } from "../../hooks/useLocalStorage";

export const LoginForm = () => {
  const INIT_VALUES = {
    username: "",
    password: ""
  }

  const local = useLocalStorage("user", null);
  const [user, setUser] = useState(INIT_VALUES);

  function handleChange(e:{target:{value:string, name: string}}) {
    console.log(e.target.value);
    setUser((prev) => ({...prev, [e.target.name]: e.target.value}))
  }

  function handleSubmit(e:FormEvent) {
    e.preventDefault();
    console.log("submitted", user);
    setUser(INIT_VALUES);
    local.setStoredValue(user);
  }
  
  function handleLogout(e:FormEvent) {
    e.preventDefault();
    setUser(INIT_VALUES);
    local.setStoredValue(null);
  }

  return (
    <div>
        <h2>Login form</h2>
        <form onSubmit={handleSubmit}>
          <label htmlFor="username">Username</label>
          <input id="username" type="text" name="username" value={user.username} placeholder="Username" onChange={handleChange} />
          <br/>
          <label htmlFor="password">Password</label>
          <input id="password" type="password" name="password" value={user.password} placeholder="Password" onChange={handleChange} />
          <br/>
          <button type="submit" >Login</button>
          <p data-testid="result">{local.value?.username}</p>
        </form>
        <button onClick={handleLogout}>Logout</button>
    </div>
  )
}
