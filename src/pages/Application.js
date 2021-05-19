import React from 'react'
import './Application.css';
import FindEvents from '../images/nearby.svg';
import Party from '../images/party.png';

const Application = () => {
    return (
        <div id="application" >
            <div className="container ">
                <div className="grid-container">
                    
                    <h1>Features</h1>
                    <div className="features_container ">
                        <div className="feature">
                            <div className="image">
                                <img src={FindEvents} alt="" />
                            </div>
                            <div className="text">
                                <h3>Find Events Near You</h3>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, praesentium!</p>
                            </div>

                        </div>

                        <div className="feature">
                            <div className="image">
                                <img src={Party} alt="" />
                            </div>
                            <div className="text">
                                <h3>Host Events You Love</h3>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, praesentium!</p>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Application
