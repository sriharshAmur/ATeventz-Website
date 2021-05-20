import React, { useEffect } from 'react'
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
    // var currentImage = 0;


    // const slideImage = [Poker, Party, Football, BeerPong, BBQ, Basketball, Cook];
    // const property = ['card-right', 'card-left'];
    // const [property, setProperty] = useState('card-right')
    // const [image, setImage] = useState(slideImage[currentImage]);

    useEffect(() => {
        imageSelector();
        // const interval = setInterval(() => {
        //     if (currentImage < 6) {
        //         currentImage = currentImage + 1;
        //         setImage(slideImage[currentImage]);
        //     } else {
        //         currentImage = 0;
        //         setImage(slideImage[currentImage]);
        //     }
        //     if (currentImage % 2 === 0) {
        //         setProperty('card-right');
        //     }
        //     else {
        //         setProperty('card-left');
        //     }
        //     return currentImage;
        // }, 2700);
        // return () => clearInterval(interval);
    }, []);

    const imageSelector = () => {
        var images = document.querySelectorAll(".card-contain img");
        // console.log(images);
        var imgArray = Array.from(images).reverse();
        var index = 0;
        setInterval(() => {
            if (index > 0) imgArray[index - 1].classList.add("hidden");


            var image = imgArray[index];
            var animation = '';
            if (index % 2 === 0) {
                animation = 'animation-right';
            }
            else {
                animation = 'animation-left';
            }
            image.classList.add(animation);
            index += 1;

            if (index > 7) {
                index = 0;
                imgArray.map((image) => {
                    image.classList.remove("hidden");
                    image.classList.remove("animation-left");
                    image.classList.remove("animation-right");
                    return image;
                })
            }
        }, 2000);

    }



    return (
        <div id="Phone">
            <div className="card-contain">

                {/* <img src={image} alt="" className={property} /> */}

                <img src={Basketball} alt="" className="card-image basketball card-right " />
                <img src={Poker} alt="" className="card-image" />
                <img src={Party} alt="" className="card-image party card-left" />
                <img src={Cook} alt="" className="card-image cook card-right" />
                <img src={Football} alt="" className="card-image football card-left" />
                <img src={BeerPong} alt="" className="card-image beerpong card-right" />
                <img src={BBQ} alt="" className="card-image bbq card-left" />
                <img src={Basketball} alt="" className="card-image basketball card-right " />
            </div>
        </div>
    )
}

export default Phone
