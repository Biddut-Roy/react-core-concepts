import { useEffect, useState } from "react"
import Fname from "./Fname"

export default function Friend(){
    const [friends, useCount] = useState([])

    useEffect(() =>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data =>useCount(data))
    }, [])
    return(
        <div>
            <li>Friend:{friends.length}</li>
            {
                friends.map( friends => <Fname name={friends.name}></Fname>)
            }
        </div>
    )
}