import { useContext } from "react"
import { StateContext } from "../../store/contextStore";

export const Box2 = () => {

  const state = useContext(StateContext);

  function handleClick() {
    !state.setState || state.setState((prev:any) => (prev || 0) + 1);
  }

  return (
    <>
    <h3>Box2</h3>
    <p>{state.state}</p>
    <button onClick={handleClick}>Increment</button>
    </>
  )
}
