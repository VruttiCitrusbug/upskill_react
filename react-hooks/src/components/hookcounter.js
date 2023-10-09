import React,{useState} from 'react'

function HookCounter() {

    const [count, stateCount] = useState(0)

    return (
        <div>
            <button onClick={() => stateCount(count + 1)}>Count {count}</button>
        </div>
    )
}

export default HookCounter