import React,{useState,useEffect} from 'react'

function UseHookCounter1() {

    const [count, setCount] = useState(0)
    const [name, setname] = useState('')

    useEffect(()=>{
        console.log('useeffect')
        document.title = `You Clicked ${count}`
    },[count])

    return (
        <div>
            <input type='text' value={name} onChange={e => setname(e.target.value)}/>
            <button onClick={() => setCount(count + 1)}>Click {count} times</button>
        </div>
    )
}

export default UseHookCounter1