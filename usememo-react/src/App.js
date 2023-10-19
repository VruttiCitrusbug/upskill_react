import './App.css';
import React,{useState,useMemo} from 'react';

function App() {

  const [counter1,setcounter1] = useState(0)
  const [counter2,setcounter2] = useState(0)
  var i = 0;
  const iseven = useMemo(() => {
    while(i<200000000){i++;}
    return counter1 % 2 == 0;
  },[counter1])

  return (
    <div className="App">
      <button onClick={() => setcounter1(counter1+1)}>counter1 - {counter1}</button>
      {iseven?'Even':'Odd'}
      <button onClick={() => setcounter2(counter2+1)}>counter2 - {counter2}</button>
    </div>
  );
}

export default App;