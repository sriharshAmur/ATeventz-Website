import React, { useState, useEffect } from 'react'
import Poker from '../images/Poker.svg'
import Cook from '../images/Cook.svg'
import Football from '../images/Football.svg'
import BBQ from '../images/BBQ.svg'
import Basketball from '../images/Basketball.svg'
import BeerPong from '../images/BeerPong.svg'
import Party from '../images/Party.svg'

import './Phone.css'


const Phone = () => {

    // const [currentImage, setcurrentImage] = useState(0);
    var currentImage = 0;


    const slideImage = [Poker, Party, Football, BeerPong, BBQ, Basketball, Cook];
    // const property = ['card-right', 'card-left'];
    const [property, setProperty] = useState('card-right')
    const [image, setImage] = useState(slideImage[currentImage]);
    
    useEffect(() => {
        const interval = setInterval(() => {
            if (currentImage < 6) {
                currentImage = currentImage + 1;
                setImage(slideImage[currentImage]);
            } else {
                currentImage = 0;
                setImage(slideImage[currentImage]);
            }
            if (currentImage % 2 === 0) {
                setProperty('card-right');
            }
            else {
                setProperty('card-left');
            }
            return currentImage;
        }, 2700);
        return () => clearInterval(interval);
    }, []);

    return (
        <div id="Phone">
            <div className="card-contain">
                <img src={image} alt="" className={property} />
            </div>

            {/* <video playsInline autoPlay muted loop >
                <source src={Swipe} type="video/mp4" />
            </video> */}

            {/* <Slide>
                {slideImage.map((image, index) => (
                    <img key={index} src={image} />
                ))}
            </Slide> */}
            {/* <img src={slideImage[1]} className="poker image-card" alt="" /> */}

        </div>
    )
}

export default Phone
