import React,{useContext} from 'react'
import { Mycon } from '../App';

function ComponentB() {
  const context = useContext(Mycon)
  return (
    <>
    <div>ComponentB</div>
    <button onClick={()=>context.dispatch('up')}>up</button>
    <button onClick={()=>context.dispatch('down')}>down</button>
    <button onClick={()=>context.dispatch('reset')}>reset</button>
    </>
  )
}

export default ComponentB