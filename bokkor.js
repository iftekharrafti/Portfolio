import React from 'react';
import './Contact.css';
import emailjs from 'emailjs-com'

const Contact = () => {
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_4ssoqoe', 'template_loojwgr', e.target, 'user_1pWNAVFU7QTWLq4OpxUKM')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
        e.target.reset()
    }
    return (
        <div className="contact" id="contact">
            <h2>Contact <span>Me</span></h2>
            <form onSubmit={sendEmail}>
                <div className="row pt-5 mx-auto">
                    <div className="col-8 form-group pt-2 mx-auto">
                        <input type="text" className="form-control" placeholder="Name" name="name" />
                    </div>
                    <div className="col-8 form-group pt-2 mx-auto">
                        <input type="email" className="form-control" placeholder="Email Address" name="email" />
                    </div>
                    <div className="col-8 form-group pt-2 mx-auto">
                        <input type="text" className="form-control" placeholder="Subject" name="subject" />
                    </div>
                    <div className="col-8 form-group pt-2 mx-auto">
                        <textarea name="message" id="" cols="30" rows="8" className="form-control" placeholder="Your Message"></textarea>
                    </div>
                    <div className="col-8 pt-3 mx-auto">
                    <input type="submit" className="btn" value="Send Message" />
                    </div>
                </div>
            </form>
        </div>
    );
};

export default Contact;