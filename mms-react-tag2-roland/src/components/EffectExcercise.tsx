import { useEffect, useState } from "react"

export const EffectExcercise = () => {

    const [number, setNumber] = useState(0);

    useEffect(() => {
        console.log("Effekt läuft")
        const interval = setInterval(() => {
            setNumber((prev) => prev + 1);
        }, 500);
        return () => clearInterval(interval)
     }, [number]);

    return <>
        <h3>EffectExcercise</h3>
        <p>Count {number}</p>
        <button onClick={()=>setNumber((prev) => prev + 1)}>Add</button>
    </>
}
