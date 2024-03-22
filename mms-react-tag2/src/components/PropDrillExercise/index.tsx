import { useState } from "react"
import PropBox1 from "./PropBox1"


const PropDrillExercise = () => {
    const [state, setState]=useState(0)
    return (
        <div>
            <h2>Prop Drill Exercise</h2>
            <p>{state}</p>
            <PropBox1 state={state} setState={setState}/>

        </div>
    )
}

export default PropDrillExercise
