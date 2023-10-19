import React,{memo} from 'react'

function Title(props) {
  console.log("Title component")
  return (
    <div>{props.title}</div>
  )
}

export default memo(Title)