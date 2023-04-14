import React from 'react'
import HocCompo from './HocCompo';

const ClickCounter = (props) => {
    console.log(props)
    return(
        <>
        ClickCounter:{props.value}
        <br/>
        <button onClick={props.updateCounter}>Imcrement!!</button>
        </>
    )
}
export default HocCompo(ClickCounter)