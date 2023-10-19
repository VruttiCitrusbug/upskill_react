import Counter2 from './component/counter2';
import Counter from './component/reducer';
import ComponentA from './contextreducer/componenta';
import ComponentB from './contextreducer/componentb';
import React,{createContext, useReducer} from 'react';

const initstate = 0

const reducer = (state,action) => {
    switch(action){
        case 'up':
            return state+1
        case 'down':
            return state-1
        case 'reset':
            return initstate
    }
}

export const Mycon = createContext()

function App() {
      const [count,dispatch] = useReducer(reducer,initstate)
      return (
          <Mycon.Provider value={{count:count,dispatch:dispatch}}>
          <div>count - {count}</div>
          <ComponentA></ComponentA>
          <ComponentB></ComponentB>
          </Mycon.Provider>
      )
  // return (
  //   <div className="App">
  //     {/* <Counter></Counter> */}
  //     {/* <Counter2></Counter2> */}
  //   </div>
  // );
}

export default App;
