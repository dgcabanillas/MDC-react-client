import React from 'react';

const Footer = () => {
    return (  
        <section id="footer">
            <div className="footer container">
                <div className="brand"> <h1> <span>D</span>iego <span>C</span>abanillas</h1> </div>
                <h2> Your Complete Web Solution </h2>
                <div className="social-icon">
                    <div className="social-item">
                        <a href="#hero"> <img src="https://img.icons8.com/bubbles/100/000000/facebook-new.png" alt=""/></a>
                    </div>
                    <div className="social-item">
                        <a href="#hero"> <img src="https://img.icons8.com/bubbles/100/000000/instagram-new.png" alt=""/></a>
                    </div>
                    <div className="social-item">
                        <a href="#hero"> <img src="https://img.icons8.com/bubbles/100/000000/twitter.png" alt=""/></a>
                    </div>
                    <div className="social-item">
                        <a href="#hero"> <img src="https://img.icons8.com/bubbles/100/000000/behance.png" alt=""/></a>
                    </div>
                </div>
                <p> Copyright &copy; 2020 Diego. All rights reserverd </p>
                
                {/*
                    <a target="_blank" href="https://iconos8.es/icons/set/consultation">Consulta icon</a> icono por <a target="_blank" href="https://iconos8.es">Icons8</a>
                */}
                
            </div>
        </section>
    );
}
 
export default Footer;