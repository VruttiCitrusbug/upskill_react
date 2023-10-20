import React from 'react';
import { Link } from 'react-router-dom';

function Nav() {
    console.log("nav");
    return (
    <nav>
        <Link to='/'>Home</Link>
        <Link to='/about'>About</Link>
        <Link to='/search'>Search</Link>
    </nav>
  )
}

export default Nav