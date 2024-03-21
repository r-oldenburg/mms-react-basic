import { useEffect, useState } from 'react';

const EffectExercise = () => {

    const [number, setNumber] = useState(0)

    useEffect(() => {
        console.log("effect run")

        const interval = setInterval(() => {
            setNumber(prev => prev + 1)
        }, 500)

        //cleanup function => beendet zuerst den interval und startet einen neuen interval
        return () => clearInterval(interval)

    }, [number])

    return (
        <div>
            <h3>Effect Exercise</h3>
            <p>Count {number}</p>
            <button onClick={() => setNumber(prev => prev + 1)}>add</button>

        </div>
    )
}

export default EffectExercise
