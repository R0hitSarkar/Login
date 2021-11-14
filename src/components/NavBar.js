import React, {useState} from 'react';
import { Link } from 'react-router-dom';

function NavBar(props) {
    let indicator = false;
    const clickHandler1 = () =>{
        indicator = true;
        props.status(indicator);
  }
  const clickHandler2 = () =>{
    indicator = false;
    props.status(indicator);
  }
  const path = props.path;
    return (
        <nav className="nav">
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to={path}>Document</Link></li>
                <Link to="/"><input type="submit" value="Login" onClick={clickHandler1} /></Link>
                <Link to="/"><input type="submit" value="Signup" onClick={clickHandler2} /></Link>
            </ul>
        </nav>
    )
}

export default NavBar;
