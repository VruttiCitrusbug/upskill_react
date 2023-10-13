import { Component } from 'react';
import './App.css';
import Greet from './components/greet';
import Hello from './components/hello'; //hello or any other component only render one element at a time
import Welcome from './components/welcome';
import Message from './components/message';
import FunctionClick from './components/functionclick';
import ClassClick from './components/classclick';
import NameList from './components/namelist';
import Stylesheet from './components/stylesheet';
import Inline from './components/inline';
import styles from './components/appstyles.module.css';
import './components/appstyles.css';
import FragmentDemo from './components/fragment';
import Table from './components/table';
import Testclick from './components/mytst';
import MemoComp from './components/memocomp';

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
      {/* <h1 className='error'>ERROR</h1>
      <h1 className={styles.success}>SUCCESS</h1> */}
      {/* <Welcome /> */}
      {/* <Hello name="vrutti" surname="patel">
        <p>childern</p>
      </Hello>
      <Welcome name="parth"></Welcome> */}
      {/* <Message></Message> */}
      {/* <Functionclick name='vrutti'></Functionclick> */}
      {/* <FunctionClick name="VVV"></FunctionClick> */}
      {/*<ClassClick></ClassClick>
      <NameList></NameList> */}
      {/* <Stylesheet primary={true} />
      < Inline /> */}
      {/* <FragmentDemo />
      <Table /> */}
      {/* <Greet name="parth" surname="machi">
      </Greet> */}
      {/* <FunctionClick name='vrutti'></FunctionClick> */}
      {/* <Testclick name="KKKK"></Testclick> */}
      <MemoComp></MemoComp>
    </div>
    );
  }
}

export default App;
