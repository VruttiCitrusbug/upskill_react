import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter,Route,Routes} from 'react-router-dom';
import Home from './component/home';
import About from './component/about';
import Nav from './component/nav';
import Featured from './component/featured';
import Search from './component/search';
import New from './component/new';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Nav></Nav>
    <Routes>
    <Route path = '/' element={<Home text='Homepage' btn='true'/>}></Route>
    <Route path = '/about' element={<About />}></Route>
    <Route path = '/order-summery' element={<Home text="Placed" btn='false'/>}></Route>
    <Route path = 'search' element={<Search></Search>}>
      <Route index element={<Featured></Featured>} />
      <Route path='featured' element={<Featured></Featured>} />
      <Route path='new' element={<New></New>} />
    </Route>
    <Route path='*' element={<Home text='Notfound'></Home>}/>
    </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
