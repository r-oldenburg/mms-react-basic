import React from 'react'
import { Link } from 'react-router-dom'

const UserItem = ({ name, id }) => {

    return (
        <div style={{ border: "1px solid black", borderRadius: "10px", margin: "10px 0" }}>
            <h5>Name: {name}</h5>
            <Link to={`/users/${id}?name=${name}`}>Details</Link>
        </div>
    )
}

export default UserItem
