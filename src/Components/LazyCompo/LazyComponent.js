import axios from 'axios'
import React, {useEffect, useState} from 'react'

 const LazyComponent = () => {
    const [Data,setData]=useState()
    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/comments')
        .then((response)=>{
            setData(response.data)
        })
    },[])
    return (
        <div>
            <table border='1px'>
                <tbody>
                    {data && data.map((info,ind)=>{
                        return(
                            <tr key={ind}>
                                <td>{info.name}</td>
                                <td>{info.email}</td>
                                <td>{info.body}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
                }

                export default LazyComponent;
        