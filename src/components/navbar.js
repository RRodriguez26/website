import React from 'react';
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <div>
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/Projects">Projects</Link>
            </li>
            <li>
                <Link to="/Photography">Photography</Link>
            </li>
            <li>
                <Link to="/Illustration">Illustration</Link>
            </li>
            <li>
                <Link to="/ReadingList">Reading List</Link>
            </li>
        </div>
    );
}

export default Navbar;