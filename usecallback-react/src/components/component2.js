import React,{memo} from 'react'

function Age(props) {
    console.log("AGE number")
  return (
    <div>{props.age}</div>
  )
}

export default memo(Age)