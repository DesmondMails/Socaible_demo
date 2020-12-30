import React from 'react'
import style from './Navbar.module.css'
import {NavLink} from "react-router-dom";

const Navbar = () => {
    return (
        <nav className={style.nav}>
            <div className={style.elem}>
                <NavLink to='/profile' activeClassName ={style.activeLink}>Profile</NavLink>
            </div>
            <div className={style.elem}>
                <NavLink to='/dialogs' activeClassName ={style.activeLink}>Messages</NavLink>
            </div>
            <div className={style.elem}>
                <NavLink to='/news' activeClassName ={style.activeLink}>News</NavLink>
            </div>
            <div className={style.elem}>
                <NavLink to='/music' activeClassName ={style.activeLink}>Music</NavLink>
            </div>
            <div className={style.elem}>
                <NavLink to='/settings' activeClassName ={style.activeLink}>Settings</NavLink>
            </div>
            <div className={style.elem}>
                <NavLink to='/users' activeClassName ={style.activeLink}>Users</NavLink>
            </div>
        </nav>
    )
}

export default Navbar;