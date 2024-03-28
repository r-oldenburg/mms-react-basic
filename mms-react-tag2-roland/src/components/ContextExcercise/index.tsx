import { useState } from "react"
import { Box1 } from "./Box1"
import { StateContext } from "../../store/contextStore"

export const ContextExcercise = () => {

    const [state, setState] = useState(0);

    return (
        <StateContext.Provider value={{state, setState}}>
            <h2>Context Excercise</h2>
            <p data-testid="context-counter">{state}</p>
            <Box1></Box1>
        </StateContext.Provider>
    )
}
