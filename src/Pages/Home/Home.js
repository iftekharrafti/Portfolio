import React from 'react';
import About from '../About/About';
import Blog from '../Blogs/Blog';
import Contact from '../Contact/Contact';
import Footer from '../Footer/Footer';
import Portfolio from '../Portfolio/Portfolio/Portfolio';
import Skill from '../Skill/Skill-home/Skill';
import HomeInitialize from './HomeInitialize/HomeInitialize';

const Home = () => {
    
    return (
        <div>
            <HomeInitialize></HomeInitialize>
            <About />
            <Skill></Skill>
            <Portfolio></Portfolio>
            <Blog></Blog>
            <Contact></Contact>
            <Footer></Footer>
        </div>
    );
};

export default Home;