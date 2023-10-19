import React,{memo} from 'react'

function Buttonsal(props) {
    console.log("SALERY button")
  return (
    <button onClick={props.handleclk}>Salary Up</button>    
  )
}

export default memo(Buttonsal)