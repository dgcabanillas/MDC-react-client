import React from 'react';

const Contact = () => {
    return (  
        <section id="contact">
            <div className="contact container">
                <div> <h1 className="section-title"> Contact <span>Info</span> </h1> </div>
                <div className="contact-items">
                    <div className="contact-item">
                        <div className="icon"> <img src="https://img.icons8.com/bubbles/100/000000/phone.png" alt="img" /> </div>
                        <div className="contact-info">  
                            <h1> Phone </h1>
                            <h2> +51 960433912 </h2>
                        </div>
                    </div>
                    <div className="contact-item">
                        <div className="icon"> <img src="https://img.icons8.com/bubbles/100/000000/new-post.png" alt="img" /> </div>
                        <div className="contact-info">  
                            <h1> Email </h1>
                            <h2> dg.cabanillas@uni.pe </h2>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Contact;