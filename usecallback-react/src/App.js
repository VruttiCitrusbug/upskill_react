import './App.css';
import Title from './components/component1';
import React,{useState,useCallback} from 'react';
import Age from './components/component2';
import Buttonage from './components/buttonage';
import Salarynum from './components/salarynum';
import Buttonsal from './components/buttonsal';

function App() {
  const [age,setage] = useState(18);
  const [salary,setsalary] = useState(1000);


  //cache function -- usecallback
  
  const upage = useCallback(() => {
    return setage(age+1)
  },[age])

  const upsal = useCallback(() => {
    return setsalary(salary+1000)
  },[salary])

  //cache result of mehod -- usememo

  return (
    <div className="App">
      <Title title={'hello'}></Title>
      <Age age={age}>Age</Age>
      <Buttonage handleclk={upage}>AGE UP</Buttonage>
      <Salarynum salary={salary}></Salarynum>
      <Buttonsal handleclk={upsal}>SAL UP</Buttonsal>
    </div>
  );
}

export default App;
