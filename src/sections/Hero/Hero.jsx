import React from "react";
import "./Hero.scss";
import Button from "../../components/Button/Button";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import heroImg from "../../assets/avatar.jpg"; // Make sure you add an avatar image in /assets/

const Hero = () => {
    return (
        <section className="hero" id="hero">
            <div className="hero__container">
                <div className="hero__image">
                    <img src={heroImg} alt="Sayan Avatar" />
                </div>
                <div className="hero__content">
                    <h1>
                        Hello, I'm <span>Sayan</span>
                    </h1>
                    <p className="hero__tagline">
                        A passionate Full-Stack Developer based in India 🇮🇳
                    </p>
                    <p className="hero__bio">
                        I specialize in building full-stack web applications using the MERN
                        stack and love turning creative ideas into real products. I’m open
                        to freelance & remote opportunities.
                    </p>

                    <div className="hero__buttons">
                        <Button variant="primary">Hire Me</Button>
                        <a
                            href="https://drive.google.com/file/d/1l_gVpjatJfzrQ242CO77qbO5h3TxKvCT/view?usp=drive_link"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn-link"
                        >
                            <Button variant="outline">Download Resume</Button>
                        </a>
                    </div>

                    <div className="hero__socials">
                        <a href="https://github.com/yourgithub" target="_blank" rel="noreferrer">
                            <FaGithub />
                        </a>
                        <a href="https://linkedin.com/in/yourlinkedin" target="_blank" rel="noreferrer">
                            <FaLinkedin />
                        </a>
                        <a href="mailto:youremail@example.com">
                            <FaEnvelope />
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
