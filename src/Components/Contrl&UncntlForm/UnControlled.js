import React, {useRef} from 'react'

const UncontrolledComp = ()=>{
    const Nameref=useRef();
    const UserNameref=useRef();
    const handleSubmit=(e)=>{
        e.preventDefault();
        console.log("UserName is:",UserNameref.current.value);
        console.log("Name is:",Nameref.current.value);
    }
    return (
        <div>UncontrolledComp
            <form onSubmit={handleSubmit}>
                <label>UserName</label>
                <input type="text" name="username" placeholder='Username' ref={UserNameref}/>
                <label>Name</label>
                <input type="text" name="name" placeholder='name' ref={Nameref}/>
                <input type='submit' value="Submit"/>
            </form>
        </div>
    )
}
export default UncontrolledComp
