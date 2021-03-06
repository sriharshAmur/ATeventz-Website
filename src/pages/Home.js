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
                            <div className="change"> Find <span>  </span> </div>  Events Near You
                        </div>
                        <div className="content_text">
                            Get an exclusive link in your inbox when the app is up
                        </div>
                        <form name="subscribe" className="content_cta" data-netlify="true" action="" method="POST">
                            <input type="hidden" name="form-name" value="subscribe" />
                            <input type="email" name="email" placeholder="Enter your email" />
                            <button > Sign Me Up</button>
                        </form>
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
