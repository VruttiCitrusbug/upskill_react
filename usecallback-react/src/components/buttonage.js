import React,{memo} from 'react'

function Buttonage(props) {
    console.log("AGE button")
  return (
    <button onClick={props.handleclk}>Age Up</button>
  )
}

export default memo(Buttonage)