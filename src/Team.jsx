import { useState } from "react"

export default function Team({}){
    const [team,setTeam] = useState(10)
    const teamStyle = {
        border:"1px solid red",
        margin:"20px",
        padding:"20px",
        borderRadius:"15px"

    }

    const add = ()=>{
        const newTeam = team+1;
        setTeam(newTeam)
    }
    return(
        <div style={teamStyle}>
            <h1>Team: {team}</h1>
            <button onClick={add}>Add</button>
            <button onClick={()=>{
                const newTeam= team-1;
                setTeam(newTeam)
            }}>Reduce</button>

        </div>
    )
}