import React from 'react'
import './Contact.css'

const Contact = () => {
    return (
        <div id="contact">
            <h1>Contact Us</h1>
            <div className="container">
                <div className="contact-container">
                    <form  name="contact">
                    <input type="hidden" name="form-name" value="contact" />
                        <div className="input-container">
                            <label htmlFor="name" >Name: </label>
                            <input type="text" name="name" placeholder="Your Name" />
                        </div>

                        <div className="input-container">
                            <label htmlFor="email" >E-mail Address: </label>
                            <input type="email" name="email" placeholder="Your E-mail" />
                        </div>

                        <div className="input-container">
                            <label htmlFor="message" >Message: </label>
                            <textarea type="text" name="message" placeholder="" />
                        </div>

                        <button >Send</button>
                    </form>

                
                </div>
            </div>


        </div>

    )
}

export default Contact
