import React,{useState} from 'react'

function HookCounter4() {

    const [items, setitem] = useState([])

    const addItem = () => {
        setitem([...items,{
            id:items.length
        }])
    }

    return (
        <div>
        <from>
            <input type='text' value={name.fname} onChange={e => setName({...name,fname:e.target.value})}/>
            <input type='text' value={name.lname} onChange={e => setName({...name,lname:e.target.value})}/>
            <h2>Your fname is - {name.fname}</h2>
            <h2>Your lname is - {name.lname}</h2>
            {JSON.stringify(name)}
        </from>
        </div>
    )
}

export default HookCounter4