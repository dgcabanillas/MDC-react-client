import React from 'react';
import ContactItem from './items/ContactItem'

const Contact = () => {
    const personalData = [
        {
            image: "/img/contact/cellphone.png",
            title: "Phone",
            value: "+51 960433912"
        },
        {
            image: "/img/contact/email.png",
            title: "Email",
            value: "dg.cabanillas@uni.pe"
        },
        {
            image: "/img/contact/location.png",
            title: "Location",
            value: "Lima, Perú"
        }
    ]

    return (  
        <section id="contact">
            <div className="contact container">
                <div> <h1 className="section-title"> Contact <span>Info</span> </h1> </div>
                <div className="contact-items">
                    {personalData.map( (information, index) => <ContactItem key={index} information={information} /> )}
                </div>
            </div>
        </section>
    );
}

export default Contact;