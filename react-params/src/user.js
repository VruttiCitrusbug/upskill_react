import './App.css';
import { Outlet } from 'react-router-dom'

function App() {
  return (
    <div className="App">
        User 1
        User 2
        User 3
        <Outlet />
    </div>
  );
}

export default App;
