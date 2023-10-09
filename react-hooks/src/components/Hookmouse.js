import React,{useState,useEffect} from 'react'

function Hookmouse() {

    const [x, setx] = useState(0)
    const [y, sety] = useState(0)

    const logposition = e => {
        console.log('mouse')
        setx(e.clientX)
        sety(e.clientY)
    }
    
    useEffect(()=>{
        console.log("call")
        window.addEventListener('mousemove',logposition)

        return () => {  
            console.log('Component unmounting')
            window.removeEventListener('mousemove',logposition)
        }
    },[])//call only once

    return (
        <div>
             X - {x} Y - {y}
        </div>
    )
}

export default Hookmouse