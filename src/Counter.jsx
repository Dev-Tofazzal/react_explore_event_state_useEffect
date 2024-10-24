import { useState } from "react"

export default function Counter({}){
    const [count,setCount] = useState(50);
    const add = ()=>{
        const newCount = count+1;
        setCount(newCount)
    }
    const reduce =()=>{
        const newCount = count-1;
        setCount(newCount);
    }
    return (
       <div style={{border:"2px solid green",padding:"20px",margin:"20px"}}>
         <h1>Counter: {count}</h1>
         <button onClick={add}>Add</button>
         <button onClick={reduce}>Reduce</button>
       </div>
        
    )
}