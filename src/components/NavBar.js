// eslint-disable-next-line
import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import {FaBars} from  'react-icons/fa';

import './NavBar.css'



const NavBar = () => {
    const [navBar, setNavBar] = useState(false);
    const [listener, setListener] = useState(null)


    useEffect(() => {
        setListener(document.addEventListener("scroll", e => {
            var scrolled = document.scrollingElement.scrollTop
            if (scrolled >= 10) {
                setNavBar(true);
            } else {
                setNavBar(false);
            }
        }));
        return () => {
            document.removeEventListener("scroll", listener)
        }
    }, [listener]);

    return (
        <div className={navBar ? 'navContainer' : "navContainer scroll"}>
            <nav >
                <div className="logo">
                    AtEventz
                </div>
                <FaBars className="menu" />
                <div className="navlinks">
                    <ul>
                        <li className="nav-link">
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
                        <li className="nav-link">
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
                        <li className="nav-link">
                            <Link
                                activeClass="active"
                                to="about"
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={500}
                            >About</Link>
                        </li>
                        {/* <li className="nav-link">
                            <Link
                                activeClass="active"
                                to="progress"
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={500}
                            >Progress</Link>
                        </li> */}
                        <li className="nav-link">
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
