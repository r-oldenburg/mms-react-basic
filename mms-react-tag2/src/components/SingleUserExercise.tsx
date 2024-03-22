import { useEffect, useState } from 'react'

const SingleUserExercise = () => {

    const [user, setUser] = useState({})
    const [userId, setUserId] = useState("1")
    const [isLoading, setIsLoading] = useState(false)



    useEffect(() => {

        const controller = new AbortController()
        const signal = controller.signal

        async function getUser() {
            setIsLoading(true)
            const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`, { signal:signal })
            const data = await response.json()
            console.log("data", data)
            setUser(data)
            if (data) {
                setIsLoading(false)
            }
        }

        getUser();

        return () => controller.abort()


    }, [userId])

    function handleUserChange(e: any) {
        setUserId(e.target.id)
        console.log("in function", userId)
    }

    console.log("userid", userId)

    const myStyle = {
        border: "1px solid black",
        margin: "5px",
        padding: "10px",
        borderRadius: "10px"
    }
    return (
        <div>
            {isLoading ? "loading..." : JSON.stringify(user)}
            <div id="1" onClick={handleUserChange} style={myStyle}>User 1</div>
            <div id="2" onClick={handleUserChange} style={myStyle}>User 2</div>
            <div id="3" onClick={handleUserChange} style={myStyle}>User 3</div>

        </div>
    )
}

export default SingleUserExercise
