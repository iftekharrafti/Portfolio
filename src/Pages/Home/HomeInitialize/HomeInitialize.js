import React from 'react';
import { Link } from 'react-router-dom';
import myPic from './my-pic.png';
import Particles from "react-tsparticles";
import { Typewriter } from 'react-simple-typewriter';
import './Home.css';


const HomeInitialize = () => {
    const particlesInit = (main) => {
        console.log(main);
    
        // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
      };
    
      const particlesLoaded = (container) => {
        console.log(container);
      };
    return (
        <div className="home-section">
            <Particles
                    id="tsparticles"
                    init={particlesInit}
                    loaded={particlesLoaded}
                    options={{
                        fpsLimit: 60,
                        interactivity: {
                        events: {
                            onClick: {
                            enable: true,
                            mode: "push",
                            },
                            onHover: {
                            enable: true,
                            mode: "repulse",
                            },
                            resize: true,
                        },
                        modes: {
                            bubble: {
                            distance: 400,
                            duration: 2,
                            opacity: 0.2,
                            size: 70,
                            },
                            push: {
                            quantity: 4,
                            },
                            repulse: {
                            distance: 200,
                            duration: 0.4,
                            },
                        },
                        },
                        particles: {
                        color: {
                            value: "#FCCA3F",
                        },
                        links: {
                            color: "#ffffff",
                            distance: 150,
                            enable: false,
                            opacity: 0.5,
                            width: 1,
                        },
                        collisions: {
                            enable: true,
                        },
                        move: {
                            direction: "none",
                            enable: true,
                            outMode: "bounce",
                            random: false,
                            speed: 2,
                            straight: false,
                        },
                        number: {
                            density: {
                            enable: true,
                            value_area: 800,
                            },
                            value: 35,
                        },
                        opacity: {
                            value: 0.5,
                        },
                        shape: {
                            type: "circle",
                        },
                        size: {
                            random: true,
                            value: 5,
                        },
                        },
                        detectRetina: true,
                    }}
                    />
                <div className="container">
                <div className="row">
                    <div className="col-lg-6 col-md-6 col-12">
                    <p className="exclusive">Hello! I am</p>
                        <h1 className="name">Iftekhar Rafti</h1>
                        <h3 className="exclusive"><span style={{ color: '#fff', fontWeight: 'bold' }}>
                        {/* Style will be inherited from the parent element */}
                        <Typewriter
                            words={['Frontend Web Developer', 'Programmer', 'Learner', 'A Self Believer']}
                            loop={5}
                            cursor
                            cursorStyle='_'
                            typeSpeed={80}
                            deleteSpeed={50}
                            delaySpeed={1000}
                        />
                        </span></h3>
                        <ul className="list">
                            <li>Frontend Developer</li>
                            <li>Programmer</li>
                            <li>Learner</li>
                        </ul>
                        <button className="btn resume mb-4 "><a href="https://drive.google.com/file/d/1LYdIPB4NXN7Z3nWAopuvLTNyXXPMxHXW/view?usp=sharing" target="_blank">Get Resume</a></button>
                        <a className="btn about mb-4" href="#about">About Me</a>
                    </div>
                    <div className="col-lg-6 col-md-6 col-12 my-img">
                        <img src={myPic} alt="" className="img-fluid" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomeInitialize;