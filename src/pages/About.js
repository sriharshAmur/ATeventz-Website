import React from 'react';
import './About.css';
import Sriharsh from '../images/Sriharsh.png';
import Aryan from '../images/aryan.jpeg';
import Linkedin from '../images/linkedin.svg';
import Instagram from '../images/instagram.svg';
import Github from '../images/github.svg';

const About = () => {
    return (
        <div id='about'>
            <div className='container'>
                <h1>About Us</h1>
                <div className='person-container'>
                    <div className='person'>
                        <div className='media'>
                            <div className='profile_picture'>
                                <img src={Sriharsh} alt='' />
                            </div>
                            <div className='social_links'>
                                <a
                                    href='https://www.linkedin.com/in/sriharsh-amur/'
                                    target='_blank'
                                    rel='noreferrer'
                                >
                                    <img src={Linkedin} alt='' />
                                </a>
                                <a
                                    href='https://github.com/sriharshAmur'
                                    target='_blank'
                                    rel='noreferrer'
                                >
                                    <img src={Github} alt='' />
                                </a>
                            </div>
                        </div>
                        <div className='description'>
                            <h3>Sri Harsh Amur</h3>
                            <h5>Developer</h5>
                            <p></p>
                        </div>
                    </div>

                    <div className='person'>
                        <div className='media'>
                            <div className='profile_picture'>
                                <img src={Aryan} alt='' />
                            </div>
                            <div className='social_links'>
                                <a
                                    href='https://www.linkedin.com/in/aryan-telang-25112001/'
                                    target='_blank'
                                    rel='noreferrer'
                                >
                                    <img src={Linkedin} alt='' />
                                </a>
                            </div>
                        </div>
                        <div className='description'>
                            <h3>Aryan Telang</h3>
                            <h5>Business guy</h5>
                            <p></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
