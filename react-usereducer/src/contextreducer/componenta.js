import React,{useContext} from 'react';
import { Mycon } from '../App';

function ComponentA() {
  const context = useContext(Mycon)
  return (
    <>
    <div>ComponentA</div>
    <button onClick={()=>context.dispatch('up')}>up</button>
    <button onClick={()=>context.dispatch('down')}>down</button>
    <button onClick={()=>context.dispatch('reset')}>reset</button>
    </>
  )
}

export default ComponentA