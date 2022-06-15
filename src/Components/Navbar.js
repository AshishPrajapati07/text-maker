import React from 'react'
import PropTypes from 'prop-types'

export default function Navbar(props) {
    return (
        <>
            <nav className={`navbar navbar-expand-lg  navbar-${props.mode} bg-${props.mode}`}>
                <a className="navbar-brand" href="/">{props.logoName}</a>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <a className="nav-link" href="/">Home</a>
                        </li>
                        <li className="nav-item active">
                            <a className="nav-link" href="/about">About</a>
                        </li>
                    </ul>
                </div>
                    <div className={`form-check form-switch text-${props.mode==='light'?'dark':'light'}`}>
                        <input className="form-check-input" onClick={props.togglemode} type="checkbox" id="flexSwitchCheckDefault" />
                        <label className="form-check-label" >Enable Dark Mode</label>
                    </div>
            </nav>
        </>
    )
}

Navbar.propTypes = {
    logoName: PropTypes.string
}