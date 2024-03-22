import Box1 from "./Box1"
import { useState } from "react"
import { StateContext } from "../../store/contextStore"

const ContextExercise = () => {

    const [state, setState] = useState(0)
    
    return (
        <StateContext.Provider value={{ state, setState }}>
            <h2>Context Exercise</h2>
            {state}
            <Box1 />
        </StateContext.Provider>
    )
}

export default ContextExercise
