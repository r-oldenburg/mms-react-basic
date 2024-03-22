

const PropBox2 = ({state, setState}) => {

    function handleStateChange(){

        setState(prev => prev +1)

    }

    return (
        <div>
            <h3>Box 2</h3>
            <p>{state}</p>
            <button onClick={handleStateChange}>Increment</button>

        </div>
    )
}

export default PropBox2
