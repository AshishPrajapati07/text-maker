import React from 'react'
import PropTypes from 'prop-types'
import {Link } from "react-router-dom";


function Navbar(props) {
    return (
        <>
            <nav className={`navbar navbar-expand-lg  navbar-${props.mode} bg-${props.mode}`}>
                <Link className="navbar-brand mx-2" to="/">{props.logoName}</Link>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <Link className="nav-link" to="/">home</Link>
                        </li>
                        <li className="nav-item active">
                            <Link className="nav-link" to="/about">About</Link>
                        </li>
                    </ul>
                </div>
                    <div className={`form-check form-switch mx-2 text-${props.mode==='light'?'dark':'light'}`}>
                        <input className="form-check-input" onClick={props.togglemode} type="checkbox" id="flexSwitchCheckDefault" />
                        <label className="form-check-label " >Enable Dark Mode</label>
                    </div>
            </nav>
        </>
    )
}

export default Navbar;

Navbar.propTypes = {
    logoName: PropTypes.string
}