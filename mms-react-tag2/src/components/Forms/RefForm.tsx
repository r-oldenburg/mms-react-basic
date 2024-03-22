import React, {useRef} from 'react'
const RefForm = () => {

    const userNameRef = useRef<HTMLInputElement>(null)
    const passWordRef = useRef<HTMLInputElement>(null)

console.log(userNameRef)

function handleSubmit(e:React.FormEvent){
    e.preventDefault()

    console.log("username", userNameRef.current?.value, "password", passWordRef.current?.value)

}

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" name="username" placeholder="username" ref={userNameRef} /><br/>
            <input type="text" name="password" placeholder="password" ref={passWordRef} /><br/>
            <button type="submit">Login</button>
        </form>
    )
}

export default RefForm
