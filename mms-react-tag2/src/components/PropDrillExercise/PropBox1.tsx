import PropBox2 from "./PropBox2"


const PropBox1 = ({state, setState}) => {
  return (
    <div>
        <h3>Box 1</h3>
            <p>{state}</p>
        <PropBox2 state={state} setState={setState}/>
    </div>
  )
}

export default PropBox1
