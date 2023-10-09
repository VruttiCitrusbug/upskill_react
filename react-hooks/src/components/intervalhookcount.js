import React,{useState,useEffect} from 'react'

function Intervalhookcount() {

    const [count, setCount] = useState(0)

    const tick = () => {
        // setCount(count => count + 1)
        setCount(prevcount => prevcount + 1)
    }

    // useEffect(()=>{
    //     const interval =  setInterval(tick,1000)
    //     return () => {
    //         clearInterval(interval)
    //     }
    // },[count])

    useEffect(()=>{
        const interval =  setInterval(tick,1000)
        return () => {
            clearInterval(interval)
        }
    },[])
    
    return (
        <div>
            {count}
        </div>
    )
}

export default Intervalhookcount