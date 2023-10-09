import React, { useState } from 'react'
import Hookmouse from './Hookmouse'

function MouseContainer() {
    const [display,setdisplay] = useState(true)
    return (
        <div>
            <button onClick={() => setdisplay(!display)}>Toggle display</button>
            {display && <Hookmouse></Hookmouse>}
        </div>
    )
}

export default MouseContainer