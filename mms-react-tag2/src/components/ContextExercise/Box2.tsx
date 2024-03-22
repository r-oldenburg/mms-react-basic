import { useContext } from "react"
import { StateContext } from "../../store/contextStore"

const Box2 = () => {

    const stateContext = useContext(StateContext)
    console.log("context", stateContext)

    function handleInc() {
        if (stateContext.setState) {
            stateContext.setState(prev => prev + 1)
        }
    }
    return (
        <div>
            <h3>Box 2</h3>
            <p>{stateContext.state}</p>
            <button onClick={handleInc}>increment</button>

        </div>
    )
}

export default Box2
