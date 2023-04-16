import React from 'react'
import LogIn from './LogIn'
import Logout from './Logout'
const CheckUser = ({User}) => {
    if (User===true)
    return <LogIn/>
    else
    return<Logout/>
}
export default CheckUser;