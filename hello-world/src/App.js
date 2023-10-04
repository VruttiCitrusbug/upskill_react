import { Component } from 'react';
import './App.css';
import Greet from './components/greet';
import Hello from './components/hello'; //heelo or any other component only render one element at a time
import Welcome from './components/welcome';
import Message from './components/message';
import Functionclick from './components/functionclick';
import ClassClick from './components/classclick';
import NameList from './components/namelist';

// function App() {
//   return (
//     <div className="App">
//       <greet />
//     </div>
//   );
// }


class App extends Component{
  render(){
    return(
      <div className="App">
      {/* <Welcome /> */}
      {/* <Hello name="vrutti" surname="patel">
        <p>childern</p>
      </Hello>
      <Greet name="parth" surname="machi">
      <p>childern</p>
      </Greet>
      <Welcome name="parth"></Welcome> */}
      {/* <Message></Message> */}
      <Functionclick></Functionclick>
      <ClassClick></ClassClick>
      <NameList></NameList>
    </div>
    );
  }
}

export default App;
