import React from "react";
function functionclick(props){
    console.log(props);
    function clickhandle(){
        props.name = 'aaa'
    }
    return (
        <div>
            {/* <button onClick={clickhandle}>{props.name}</button> */}
            <button >{props.name}</button>
            <h1></h1>
        </div>
    )
}
export default functionclick