import React from 'react';
import { Link, Outlet } from 'react-router-dom';

function Search() {
    console.log("search");
    return (
    <div>
        <input type='text'></input>
        <nav>
        <Link to='featured'>Featured</Link>{/* http://localhost:3000/search/featured */}
        {/* <Link to='featured'>Featured</Link> ==>  url http://localhost:3000/featured */} 
        <Link to='new'>New</Link>
        </nav>
        <Outlet></Outlet>
    </div>
  )
}

export default Search