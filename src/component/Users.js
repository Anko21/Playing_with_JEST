import { response } from 'express'
import React, { useEffect, useState } from 'react'

const Users = () => {
    const [users,setUsers] = useState([])

    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
            .then((response)=>response.json())
            .then((data) => {
                setUsers(data)
            })
    },[])

  return (
    <div>
        <ul>
            {users.map((user)=>{
                return <li key={user.email} role = "listitem">{user.username}, {user.email}</li>
            })}
        </ul>
    </div>
  )
}

export default Users