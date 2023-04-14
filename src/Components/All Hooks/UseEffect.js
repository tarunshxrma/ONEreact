import React, {useState, useEffect} from 'react';

const DemoUseState = ()=>{
    console.log(useState());
    const [Value,setValue]=useState("Tarun Sharma");
    useEffect(()=>{
        setTimeout(()=>{
            setValue("Hello PrepBytes")
        },3000)
    },[])

    return (
        <div>DemoUseState
            <h1 style={{color: 'green'}}>{Value}</h1>

        </div>
    )
}
export default DemoUseState;
  