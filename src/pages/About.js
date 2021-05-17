import React from 'react'
import './About.css'
import Sriharsh from '../images/Sriharsh.png';
import Linkedin from '../images/linkedin.svg';
import Instagram from '../images/instagram.svg';
import Github from '../images/github.svg';

const About = () => {
    return (
        <div id="about">
            <div className="container">
                <h1>About Us</h1>
                <div className="person-container">
                    <div className="person">
                        <div className="media">
                            <div className="profile_picture">
                                <img src={Sriharsh} alt="" />
                            </div>
                            <div className="social_links">
                                <a href="/#"><img src={Linkedin} alt="" /></a>
                                <a href="/#"><img src={Instagram} alt="" /></a>
                                <a href="/#"><img src={Github} alt="" /></a>
                            </div>
                        </div>
                        <div className="description">
                            <h3>Sri Harsh Amur</h3>
                            <h5>Developer</h5>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, ut?</p>
                        </div>
                    </div>


                    <div className="person">
                        <div className="media">
                            <div className="profile_picture">
                                <img src="" alt="" />
                            </div>
                            <div className="social_links">
                                <a href="/#"><img src={Linkedin} alt="" /></a>
                                <a href="/#"><img src={Instagram} alt="" /></a>
                                <a href="/#"><img src={Github} alt="" /></a>
                            </div>
                        </div>
                        <div className="description">
                            <h3>Aryan Telang</h3>
                            <h5>Business guy</h5>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis, provident! Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, ut?</p>
                        </div>
                    </div>

                    <div className="person">
                        <div className="media">
                            <div className="profile_picture">
                                <img src="" alt="" />
                            </div>
                            <div className="social_links">
                                <a href="/#"><img src={Linkedin} alt="" /></a>
                                <a href="/#"><img src={Instagram} alt="" /></a>
                                <a href="/#"><img src={Github} alt="" /></a>
                            </div>
                        </div>
                        <div className="description">
                            <h3>Leon</h3>
                            <h5>Developer</h5>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, ut?</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About
