import React from 'react';
import profilePhoto from './assets/Aayush_Image.png';
import resume from './assets/Aayush__EAGames_Resume-1.pdf';
import './HeroSection.css';

function HeroSection() {
    return (
        <section className="hero-section">
            <div className="hero-content">
                <p className="greeting">HELLO THERE 👋, I'M</p>
                <h1 className="name">Aayush Kumar <span className="emoji">💻</span></h1>
                <p className="title">FULL-STACK DEVELOPER</p>
                <p className="description">
                    Software Developer with hands-on experience in backend services, cloud, and full-stack development.
                    I specialize in building scalable solutions using modern technologies.
                </p>
                <a href={resume} className="cv-button" target="_blank" rel="noopener noreferrer">
                    CHECK OUT MY CV
                </a>
            </div>
            <img src={profilePhoto} alt="Aayush Kumar" className="hero-photo"/>
        </section>
    );
}

export default HeroSection;
