import React from "react";

function Person({name}){
    return(
        <div>
            <h2>I'm {name.name} and my age is {name.age}</h2>
        </div>
    )
}
export default Person