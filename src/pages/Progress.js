import React, { useState } from 'react'
import Half from '../images/half_filled.svg';
import prototype from '../images/prototype.svg';
import ideation from '../images/ideation.svg';
import launch from '../images/launch.svg';
import mvp from '../images/mvp.svg';
import './Progress.css';

const Progress = () => {
    const content = {
        "ideation": {
            "title": "Ideation",
            "text": "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi, natus.",
            "src": ideation,
        },
        "prototype": {
            "title": "Prototype",
            "text": "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi, natus.",
            "src": prototype
        },

        "mvp": {
            "title": "MVP",
            "text": "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi, natus.",
            "src": mvp
        },
        "launch": {
            "title": "Launch",
            "text": "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi, natus.",
            "src": launch
        }
    };
    const [description, setDescription] = useState(content['ideation']);


    const setContent = (stage) => {
        setDescription(content[stage]);
    }


    return (
        <div id="progress">
            <div className="container">
                <h1>Progress</h1>
                <div className="progress_bar">
                    <div className="ideation stage" onClick={() => setContent('ideation')}>
                        <div className="shape">
                            <div className="circle filled"></div>
                            <div className="line filled"></div>
                        </div>

                    Ideation
                </div>

                    <div className="prototype stage" onClick={() => setContent('prototype')}>
                        <div className="shape">
                            <div className="line filled"></div>
                            <div className="circle filled"></div>
                            <div className="line filled"></div>
                        </div>
                        <p>Prototype</p>

                    </div>

                    <div className="development stage" onClick={() => setContent('mvp')}>
                        <div className="shape">
                            <div className="line filled"></div>
                            {/* <img src={Half} alt="" /> */}
                            <div className="circle "></div>
                            <div className="line"></div>
                        </div>

                    MVP Developemnt
                </div>

                    <div className="launch stage" onClick={() => setContent('launch')}>
                        <div className="shape">
                            <div className="line"></div>
                            <div className="circle"></div>
                            <div className="line"></div>
                        </div>

                    Launch App
                </div>
                </div>

                <div className="description">
                    

                    <div className="text">
                        <h3>{description.title}</h3>
                        <p>{description.text}  </p>

                    </div>

                    <div className="image">
                        <img src={description.src} alt="" />
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Progress
