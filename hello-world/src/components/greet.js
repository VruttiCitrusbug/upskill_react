import React from "react";

// function Greet(){
//     return <h1> From Vrutti</h1>
// }
const Greet = (props) => {
    console.log(props);
    return (
        <div>
            <h1> from {props.name}</h1>
        </div>
    )
}

export default Greet