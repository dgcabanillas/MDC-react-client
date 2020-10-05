import React from 'react';
import SocialItem from './items/SocialItem';

const Footer = () => {
    const socialitems = [
        {
            link: "https://www.facebook.com/dgcc94/",
            image: "/img/social/facebook.png"
        },
        {
            link: "https://www.instagram.com/diego_grcc/",
            image: "/img/social/instagram.png"
        },
        {
            link: "https://twitter.com/DiegoCa20137807",
            image: "/img/social/twitter.png"
        },
        {
            link: "https://github.com/dgcabanillas",
            image: "/img/social/github.png"
        }
    ]

    return (  
        <section id="footer">
            <div className="footer container">
                <div className="brand"> <h1> <span>D</span>iego <span>C</span>abanillas</h1> </div>
                <h2> La ayuda que necesitas para tus proyectos de Software </h2>
                <div className="social-icon">
                    {socialitems.map( (info, index) => <SocialItem key={index} info={info} /> )}
                </div>
                <p> Copyright &copy; 2020 Diego. Todos los derechos reservados </p>
            </div>
        </section>
    );
}
 
export default Footer;