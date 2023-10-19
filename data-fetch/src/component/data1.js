import React,{useState,useEffect} from 'react'
import axios from 'axios'

function Data1() {

    const [data,setdata] = useState({})
    const [loading,setloading] = useState(true)
    const [error,seterror] = useState('')

    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/posts/1').then(res=>{
            seterror('');
            setloading(false);
            setdata(res.data)
        }).catch(error=>{
            setdata({});
            setloading(false);
            seterror('Something went wrong');
        })
    })

    return (
        <>
        <div>{loading?"Loading":data.title}</div>
        <div>{error}</div>
        </>
    )
}

export default Data1