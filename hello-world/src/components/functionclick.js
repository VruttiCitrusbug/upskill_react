import React from "react";
function functionclick(){
    function clickhandle(){
        console.log('btn')
    }
    return (
        <div>
            <button onClick={clickhandle}>Click</button>
        </div>
    )
}
export default functionclick