import React, {useState} from 'react'

const ControlledComp = ()=>{
    const [UserName,setUserName]=useState("");
    const [Name,setName]=useState("");
    const handleSubmit=(e)=>{
        e.preventDefault();
        console.log("UserName is", UserName);
        console.log("Name is", Name);

    }
    return (
        <div>ControlledComp
            Form:
        <div>
        <form onSubmit={handleSubmit}>
            <label>UserName</label>
            <input type="text" name="username" placeholder='Username' value={UserName}
            onChange={(e)=>{setUserName(e.target.value)
            console.log(e.target.value)}} />
            <label>Name</label>
            <input type="text" name="name" placeholder='name' value={Name}
            onChange={(e)=>setName(e.target.value)} />
            <input type='submit' value="Submit"/>
            </form>
            </div>
            </div>
    )
}
export default ControlledComp
