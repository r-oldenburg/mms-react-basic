import { useEffect, useState } from "react";

const UserDataExercise = () => {

    //request userdata from API
    //https://jsonplaceholder.typicode.com/

    const URL = "https://jsonplaceholder.typicode.com/users"
    const [users, setUsers] = useState([])
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        setIsLoading(true)
        setTimeout(()=>{
            fetch(URL)
                .then(res => res.json())
                .then(data => {
                    setUsers(data)
                    setIsLoading(false)
                })
        }, 2000)
        

    }, [])

    const UserList = users.map((item: { name: string,id: string }) => {
        return <div key={item.id}>
            <h3>{item.name}</h3>
        </div>
    })


    return (
        <div>
            <h2>User Data Exercise</h2>
            {isLoading ? <p> isLoading...</p> : UserList}

        </div>
    )
}

export default UserDataExercise
