import { useEffect, useState } from "react"

export default function Users(){
    const [user,setUser]=useState([]);
    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/users")
        .then(res=> res.json())
        .then(data=>setUser(data))
    },[])

    return(
        <div>
            <h1>Users: {user.length} </h1>
        </div>
    )
}