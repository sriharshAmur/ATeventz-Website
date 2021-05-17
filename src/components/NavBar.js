// eslint-disable-next-line
import React from 'react';
import { Link } from 'react-scroll';

import './NavBar.css'

const NavBar = () => {
    return (
        <div className="navContainer">
            <nav>
                <div className="logo">
                    ATeventz
                </div>
                <div className="navlinks">
                    <ul>
                        <li class="nav-link">
                            {/* <Link to="/">Home</Link> */}
                            <Link
                                activeClass="active"
                                to="home"
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={500}
                            >Home</Link>
                        </li>
                        <li class="nav-link">
                            {/* <Link to="/app">App</Link> */}
                            <Link
                                activeClass="active"
                                to="application"
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={500}
                            >App</Link>
                        </li>
                        <li class="nav-link">
                            <Link
                                activeClass="active"
                                to="about"
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={500}
                            >About</Link>
                        </li>
                        <li class="nav-link">
                            <Link
                                activeClass="active"
                                to="progress"
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={500}
                            >Progress</Link>
                        </li>
                        <li class="nav-link">
                            <Link
                                activeClass="active"
                                to="contact"
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={500}
                            >Contact</Link>
                        </li>
                    </ul>
                </div>
                <div className="cta">
                    <button>Sign Up</button>
                </div>
            </nav>
        </div>
    )
}

export default NavBar
