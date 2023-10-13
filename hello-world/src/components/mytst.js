import React from "react";

function Testclick(props){
    let aaa = props.name
    console.log(props.name)
    console.log(aaa);
    console.log("render");
    function clickme(){
        console.log(aaa,'lll')//props.name
        aaa = 'abc'
        console.log(aaa,'lll')//abc
    }
    return (
        <div>
            <button onClick={clickme}>{aaa}</button>
            <h1></h1>
        </div>
    )
}

export default Testclick