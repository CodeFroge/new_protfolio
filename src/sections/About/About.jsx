import React from "react";
import "./About.scss";

// Import icons from react-icons
import { FaReact, FaNodeJs, FaGitAlt } from "react-icons/fa";
import { SiMongodb, SiExpress, SiJavascript, SiReact } from "react-icons/si";
import { DiCss3 } from "react-icons/di"; // For SCSS/CSS icon

const skills = [
    { name: "React", icon: <FaReact /> },
    { name: "React Native", icon: <SiReact /> },
    { name: "Node.js", icon: <FaNodeJs /> },
    { name: "MongoDB", icon: <SiMongodb /> },
    { name: "Express", icon: <SiExpress /> },
    { name: "JavaScript (ES6+)", icon: <SiJavascript /> },
    { name: "SCSS", icon: <DiCss3 /> }, // <-- Use this instead
    { name: "Git & GitHub", icon: <FaGitAlt /> },
    { name: "REST APIs", icon: null },
];


const About = () => {
    return (
        <section className="about" id="about">
            <div className="about__container">
                <h2 className="about__title">About Me</h2>
                <p className="about__description">
                    I'm a passionate Full-Stack Developer with a strong interest in crafting
                    dynamic, beautiful, and user-friendly web applications. With experience in
                    the MERN stack, I love turning ideas into reality using clean code and
                    modern technologies.
                </p>

                <div className="about__skills">
                    <h3>Skills:</h3>
                    <ul>
                        {skills.map(({ name, icon }) => (
                            <li key={name}>
                                {icon && <span className="skill-icon">{icon}</span>}
                                {name}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default About;
