import React from "react";
import { NavLink } from "react-router-dom";
import s from './Navbar.module.css';

const Navbar = () => {
    return <nav className={s.nav}>
        <NavLink to='/about'> About </NavLink>
        <NavLink to='/edit_cards' > Cards editor </NavLink>
    </nav>
}

export default Navbar;