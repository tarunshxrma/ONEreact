import React from 'react'
 const Ternary = () => {
    const Consistency = 2;
    return (
        <div>Ternary

        <div>
        This is example of Ternary Operator
        </div>
        {Consistency===1?<div style={{backgroundColor:'green',color:'red'}}>You will get Placed</div>:<div style={{backgroundColor:'red',color:'green'}}>Try one more time</div>}
        </div>
    )
 }

 export default Ternary