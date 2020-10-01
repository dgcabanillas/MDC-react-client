import React, { Fragment } from 'react';

// Landing Page
import Navbar from './components/landing/Navbar';
import Hero from './components/landing/Hero';
import Services from './components/landing/Services';
import Projects from './components/landing/Projects';
import About from './components/landing/About';
import Contact from './components/landing/Contact';
import Footer from './components/landing/Footer';

function App() {
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

export default App;