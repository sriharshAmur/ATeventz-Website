import React from 'react';
import Iphone from '../images/phoneFrame.svg' 
import './Home.css'

const Home = () => {
    return (
        <div id="home">
            .
        <div className="content_container container">
            <div className="content">
                <div className="content_title">
                    Find <span>  </span> <br /> Events Near You
                </div>
                <div className="content_text">
                Get an exclusive link in your inbox when the app is up
                </div>
                <div className="content_cta">
                    <button>Sign Me Up</button>
                </div>
            </div>
            <div className="phoneFrame">
                <img src={Iphone} alt="" />
            </div>
        </div>
        
        </div>
    )
}

export default Home
