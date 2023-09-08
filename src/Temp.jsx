import { useState } from "react"


export default function Temp(){
    const [count , setcount] = useState(11);
    const clickhandel = () =>{
       const  newcount = count + 1;
       setcount(newcount)
    }
    return(
        <div>
            <h3>Player:{count}</h3>
            <button onClick={clickhandel}>increment</button>
        </div>
    )
}