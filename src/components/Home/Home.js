import React from 'react';
import AboutMe from './AboutMe';
import Banner from './Banner';
import Contact from './Contact';
import Projects from './Projects';
import Skills from './Skills';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <AboutMe></AboutMe>
            <Projects></Projects>
            <Skills></Skills>
            <Contact></Contact>
        </div>
    );
};

export default Home;