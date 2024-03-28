import { PropBox2 } from "./PropBox2"

export const PropBox1 = ({state, setState}:{state:any, setState:any}) => {
  return (
    <>
    <h3>PropBox1</h3>
    <p>{state}</p>
    <PropBox2 state={state} setState={setState}></PropBox2>
    </>
  )
}
