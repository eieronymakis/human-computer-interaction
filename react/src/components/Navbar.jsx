import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import '../assets/styles/Navbar.css';
    
function Navbar(){
    const getStoredTheme = () => localStorage.getItem('theme')
    const setStoredTheme = theme => localStorage.setItem('theme', theme)

    useEffect(() => {
        if (getStoredTheme() === 'dark'){
            document.documentElement.setAttribute('data-bs-theme', 'dark');
            document.getElementById("theme_toggler").checked = false;
        }else{
            document.documentElement.setAttribute('data-bs-theme', 'light');
            document.getElementById("theme_toggler").checked = true;
        }
    }, []); 

    const changeTheme = () => {
        if(getStoredTheme() === 'dark'){
            setStoredTheme('light')
            document.documentElement.setAttribute('data-bs-theme', 'light');
        }else {
            setStoredTheme('dark')
            document.documentElement.setAttribute('data-bs-theme', 'dark');
        }
    }

    const [loggedIn, setLoggedIn] = useState(true)

    if(loggedIn){
        return (
            <nav className="navbar navbar-expand-lg border-bottom border-secondary sticky-top bg-body">
                <div className="container-fluid">
                    <Link tabIndex={-1} to="/" className="navbar-logo">
                        <span>Vision</span><span style={{color: '#2A7423 '}}>Studio</span>.
                    </Link>
                </div>
                
                <div className="dropdown ms-auto">
                    <button type="button" className="logged-in btn text-dark border border-dark border-2 me-2 navbar-btn-login d-flex align-items-center justify-content-center" data-bs-toggle="dropdown" aria-expanded="false">
                        <span className="d-flex align-items-center tag">eieronymakis</span>
                        <i className="ms-2 fs-3 bi bi-person-circle"></i>
                    </button>
                    <ul className="dropdown-menu mt-2 border border-2 border-dark">
                        <Link to="/profile" className="profile-dropdown-item d-flex align-items-center justify-content-start">
                            <i className="text-dark fs-3 bi bi-person-fill-gear me-3 ms-3"></i>
                            <div className="text-dark fs-5 fw-normal">Λογαριασμός</div>
                        </Link>
                        <li><hr className="dropdown-divider"/></li>
                        <Link to="/order-history" className="profile-dropdown-item dropdown-orders d-flex align-items-center justify-content-start">
                            <i className="text-dark fs-3 bi bi-cash-coin me-3 ms-3"></i>
                            <div className="text-dark fs-5 fw-normal">Αγορές</div>
                        </Link>
                        <li><hr className="dropdown-divider"/></li>
                        <Link to="/contact" className="profile-dropdown-item dropdown-logout d-flex align-items-center justify-content-start">
                            <i className="text-dark fs-3 bi bi-patch-question me-3 ms-3"></i>
                            <div className="text-dark fs-5 fw-normal">Επικοινωνία</div>
                        </Link>
                        <li><hr className="dropdown-divider"/></li>
                        <Link to="/logout" className="profile-dropdown-item dropdown-logout d-flex align-items-center justify-content-start">
                            <i className="text-dark fs-3 bi bi-door-open-fill me-3 ms-3"></i>
                            <div className="text-dark fs-5 fw-normal">Αποσύνδεση</div>
                        </Link>
                    </ul>
                </div>

                <Link to="/cart" className="text-light btn btn-warning shadow-none me-2 d-flex navbar-btn-cart d-flex align-items-center justify-content-center">
                    <span className="d-flex align-items-center justify-content-center tag">Καλάθι</span>
                    <i className="ms-2 fs-3 bi bi-cart"></i>
                    <span className="button__badge bg-danger">9</span>
                </Link>

                <div className="switch_box box_3 me-2">
                    <div className="toggle_switch">
                        <input id="theme_toggler" type="checkbox" onChange={changeTheme} className="switch_3"/>
                        <svg className="checkbox" xmlns="http://www.w3.org/2000/svg" style={{isolation: "isolate"}} viewBox="0 0 168 80">
                        <path className="outer-ring" d="M41.534 9h88.932c17.51 0 31.724 13.658 31.724 30.482 0 16.823-14.215 30.48-31.724 30.48H41.534c-17.51 0-31.724-13.657-31.724-30.48C9.81 22.658 24.025 9 41.534 9z" fill="none" stroke="#fff" strokeWidth="3" strokeLinecap="square" strokeMiterlimit="3"/>
                        <path className="is_checked" d="M17 39.482c0-12.694 10.306-23 23-23s23 10.306 23 23-10.306 23-23 23-23-10.306-23-23z"/>
                        <path className="is_unchecked" d="M132.77 22.348c7.705 10.695 5.286 25.617-5.417 33.327-2.567 1.85-5.38 3.116-8.288 3.812 7.977 5.03 18.54 5.024 26.668-.83 10.695-7.706 13.122-22.634 5.418-33.33-5.855-8.127-15.88-11.474-25.04-9.23 2.538 1.582 4.806 3.676 6.66 6.25z"/>
                        </svg>
                    </div>
                </div>
            </nav>
        )
    }else{
        return (
            <nav className="navbar navbar-expand-lg border-bottom border-secondary sticky-top bg-body">
                <div className="container-fluid">
                    <Link tabIndex={-1} to="/" className="navbar-logo">
                        <span>Vision</span><span style={{color: '#2A7423 '}}>Studio</span>.
                    </Link>
                </div>

                <Link to="/login" className="text-light ms-auto btn btn-success shadow-none me-2 d-flex navbar-btn-login d-flex align-items-center justify-content-center ">
                    <span className="d-flex align-items-center tag">Σύνδεση / Εγγραφή</span>
                    <i className="ms-2 fs-3 bi bi-person-circle"></i>
                </Link>

                <Link to="/cart" className="text-light btn btn-warning shadow-none me-2 d-flex navbar-btn-cart d-flex align-items-center justify-content-center">
                    <span className="d-flex align-items-center justify-content-center tag">Καλάθι</span>
                    <i className="ms-2 fs-3 bi bi-cart"></i>
                    <span className="button__badge bg-danger">9</span>
                </Link>

                <div className="switch_box box_3 me-2">
                    <div className="toggle_switch">
                        <input id="theme_toggler" type="checkbox" onChange={changeTheme} className="switch_3"/>
                        <svg className="checkbox" xmlns="http://www.w3.org/2000/svg" style={{isolation: "isolate"}} viewBox="0 0 168 80">
                        <path className="outer-ring" d="M41.534 9h88.932c17.51 0 31.724 13.658 31.724 30.482 0 16.823-14.215 30.48-31.724 30.48H41.534c-17.51 0-31.724-13.657-31.724-30.48C9.81 22.658 24.025 9 41.534 9z" fill="none" stroke="#fff" strokeWidth="3" strokeLinecap="square" strokeMiterlimit="3"/>
                        <path className="is_checked" d="M17 39.482c0-12.694 10.306-23 23-23s23 10.306 23 23-10.306 23-23 23-23-10.306-23-23z"/>
                        <path className="is_unchecked" d="M132.77 22.348c7.705 10.695 5.286 25.617-5.417 33.327-2.567 1.85-5.38 3.116-8.288 3.812 7.977 5.03 18.54 5.024 26.668-.83 10.695-7.706 13.122-22.634 5.418-33.33-5.855-8.127-15.88-11.474-25.04-9.23 2.538 1.582 4.806 3.676 6.66 6.25z"/>
                        </svg>
                    </div>
                </div>
            </nav>
        )
    }
}

export default Navbar;