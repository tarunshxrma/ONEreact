import React, { useState } from 'react'

const StateUpLifting = (props) => {
    const [name, setName] = useState("")
    const HandleSubmit = (e) => {
        e.preventDefault();
        console.log(props);
        props.getName(name);
    }
    return (
        <div>StateUpLifting
            <form>
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
                <button onClick={HandleSubmit}>Click Me!!</button>
            </form>
        </div>
    )
}

export default StateUpLifting;