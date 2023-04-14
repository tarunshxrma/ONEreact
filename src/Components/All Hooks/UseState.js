import React, { useState } from 'react';

const SamplePage = () => {
    const [counter, setCounter] = useState(0);

    const handleClick = () => setCounter(counter + 1);
    return(
        <>
         <div>{counter}</div>
        <button onClick={handleClick}>Click Me</button>
       
        </>
    )


}

export default SamplePage;