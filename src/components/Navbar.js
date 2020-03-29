import React from 'react';
import './Navbar.css';
import {Link} from 'react-router-dom';


const Navbar = (props) => {
    return (
        <div>
            <nav>
            <h1>My React multipage site</h1>
            <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">about me</Link></li>
            <li>Cart: <span>{props.basketNumbers}</span></li>
            </ul>
            </nav>
        </div>
    )
}
export default Navbar;
