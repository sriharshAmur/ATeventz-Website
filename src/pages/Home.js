import React from 'react';
import Phone from '../components/Phone';
import Video from '../videos/party.mp4'
import './Home.css'

const Home = () => {
    return (
        <div id="home">


            <div className="container">
                <video playsInline autoPlay muted loop id="bgvid">
                    <source src={Video} type="video/mp4" />
                </video>

                <div className="content_container">

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
                        <Phone></Phone>
                    </div>
                </div>

            </div>


        </div>
    )
}

export default Home
