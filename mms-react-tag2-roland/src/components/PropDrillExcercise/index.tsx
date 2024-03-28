import { useState } from "react"
import { PropBox1 } from "./PropBox1"

export const PropDrillExcercise = () => {

    const [state, setState] = useState(0)

    return (
        <>
        <div>PropDrillExcercise</div>
        <p>{state}</p>
        <PropBox1 state={state} setState={setState}></PropBox1>
        </>
    )
}
