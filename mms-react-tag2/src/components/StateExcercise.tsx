import {useState} from 'react';

const StateExcercise = () => {

    const [number, setNumber] = useState<number>(0)

    function inc(){
        setNumber(number + 1)
    }

    return (
        <div>
            <h2>State Exercise</h2>
            <h2>{number}</h2><br />
            <button onClick={inc}>Increment</button>
        </div>
    )
}

export default StateExcercise
