import { useState } from "react";

export const StateExcercise = () => {
    
    const [number, setNumber] = useState<number>(0);

    function inc() {
        setNumber(number + 1)
    }

    return <div>
        <h2>StateExcercise</h2>
        <h2 data-testid="Number">{number}</h2>
        <button onClick={inc}>Increment</button>
    </div>
};
