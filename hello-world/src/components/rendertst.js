import React from "react";
function FunctionClick(){
    function clickhandle(){
        console.log('btn')
    }
    return (
        <div>
            <button onClick={clickhandle}>Click</button>
        </div>
    )
}
export default FunctionClick