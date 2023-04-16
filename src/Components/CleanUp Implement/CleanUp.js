import React, { useEffect, useState } from 'react'

const DemoUseEffect = () => {
    const [value, setValue] = useState(0)
    useEffect(() => {
        console.log("Component Mount here...")
        return () => {
            console.log("CleanUp here...")
        }
    }, [value])
    return (
        <>
            <div>DemoUseEffect: {value}</div>
            <button onClick={() => setValue(value + 1)}>Increment</button>
        </>
    )
}

export default DemoUseEffect;
