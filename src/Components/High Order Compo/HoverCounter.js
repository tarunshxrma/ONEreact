import React from 'react'
import HocCompo from './HocCompo'

const HoverCounter = (props) => {
    console.log("from hoverCounter", props)
    return (
        <>
        HoverCounter:{props.value}
        <div><button onMouseOver={props.updateCounter}>Imcrement!!</button></div>
        </>
    )
}
export default HocCompo(HoverCounter)