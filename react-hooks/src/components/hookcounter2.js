import React,{useState} from 'react'

function HookCounter2() {

    const initcount = 0
    const [count, setcount] = useState(initcount)
    const plus5 = () => {
        for(let i=0;i<5;i++){
            setcount(previous => previous+1)
        }
    }
    return (
        <>
        Count: {count}
        <button onClick={() => setcount(initcount)}>Reset</button>
        <button onClick={() => setcount(count + 1)}>incrementCount</button>
        <button onClick={() => setcount(count - 1)}>decrementCount</button>
        <button onClick={plus5}>increaseby5</button>
        </>
    )
}

export default HookCounter2