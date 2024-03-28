import { FormEvent, useRef } from "react";

export const RefForm = () => {

  const userNameRef = useRef<HTMLInputElement | null>(null);
  const passwordRef = useRef<HTMLInputElement | null>(null);
  
  function handleSubmit(e:FormEvent) {
    e.preventDefault();
    console.log("user", userNameRef.current?.value);
    console.log("pass", passwordRef.current?.value);
  }

  return (
    <form onSubmit={handleSubmit}>
    <label htmlFor="username">Username</label>
    <input id="username" type="text" name="username" placeholder="Username" ref={userNameRef} />
    <br/>
    <label htmlFor="password">Password</label>
    <input id="password" type="password" name="password" placeholder="Password" ref={passwordRef} />
    <br/>
    <button type="submit" >Login</button>
  </form>

  )
}
