import React, { Fragment } from 'react';
import Navbar from './Navbar';
import Hero from './Hero';
import Services from './Services';
import Projects from './Projects';
import About from './About';
import Contact from './Contact';
import Footer from './Footer';

const Landing = () => {
    return (  
        <Fragment>
            <Navbar />
            <Hero />
            <Services />
            <Projects />
            <About />
            <Contact />
            <Footer />
        </Fragment>
    );
}
 
export default Landing;