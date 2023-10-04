import React from "react";

// const Hello = () => <div><h1>Hello From Vrutti</h1></div>
const Hello = (props) => {

// return React.createElement('div',null,'Hello')

    // 3 parametere 1->html tag , 2-> object for id and class, 3-> inner text of div element
//  return React.createElement('div','p','<h1>Hello</h1>' )  //text - <h1>Hello</h1>
//  <div id="root"><div class="App"><div><h1>Hello</h1></div></div></div>


{/* <div id="root"><div class="App"><div>h1Hello</div></div></div> */}
// return React.createElement('div','p','h1','Hello')

return React.createElement('div',{id:'hello',className:'hello1'},React.createElement('h1',null,'hiii {vrutti}'))
{/* <div id="root"><div class="App"><div id="hello" class='hello1'><h1>hiii vrutti</h1></div></div></div> */}
}

export default Hello