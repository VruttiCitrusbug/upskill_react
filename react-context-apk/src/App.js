import React from 'react';
import ComponentC from './component/componentc';

export const Usercontext = React.createContext()
export const Usercontext2 = React.createContext()

function App() {
  return (
    <div className="App">
      {/* <Usercontext.Provider value={['vrutti','yyy']}> */}
      <Usercontext.Provider value={{x:'vrutti',y:'yyy'}}>
        <Usercontext2.Provider value={'piku'}>
          <ComponentC></ComponentC>
        </Usercontext2.Provider>
      </Usercontext.Provider>
    </div>
  );
}

export default App;