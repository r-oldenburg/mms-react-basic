export const PropBox2 = ({state, setState}:{state:any, setState:any}) => {

  function handleClick() {
    setState((prev:any) => prev + 1)
  }

  return (
    <>
    <h3>PropBox2</h3>
    <p>{state}</p>
    <button onClick={handleClick}>Increment</button>
    </>
  )
}
