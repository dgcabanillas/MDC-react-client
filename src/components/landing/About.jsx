import React from 'react';

const About = () => {
    return (  
        <section id="about">
            <div className="about container">
                <div className="col-left">
                    <div className="about-img">
                        <img src="/img/img-2.png" alt="img" />
                    </div>
                </div>
                <div className="col-right">
                    <h1 className="section-title"> About <span>me</span> </h1>
                    <h2> Fron End Developer </h2>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste doloribus id voluptatem minima. Magni itaque nihil facilis sint vero, quia quaerat illo voluptate explicabo molestias rem sequi in officiis odit qui deserunt ut sunt inventore ducimus iusto recusandae nisi alias expedita. Reiciendis autem minus quibusdam optio quaerat necessitatibus voluptatum nostrum.
                    </p>
                    <a href="#hero" type="button" className="cta"> Download Resume </a>
                </div>
            </div>
        </section>
    );
}
 
export default About;