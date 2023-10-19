import React,{memo} from 'react'

function Salarynum(props) {
    console.log("Sal number")
  return (
    <div>{props.salary}</div>
  )
}

export default memo(Salarynum)