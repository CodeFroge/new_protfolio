import React, { useState } from "react";
import "./Navbar.scss";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const handleScrollLink = () => {
        setMenuOpen(false);
    };

    return (
        <header className="navbar">
            <div className="navbar__logo">
                <a href="#hero">Sayan Majhi</a>
            </div>

            <nav className={`navbar__links ${menuOpen ? "open" : ""}`}>
                <a href="#about" onClick={handleScrollLink}>About</a>
                <a href="#projects" onClick={handleScrollLink}>Projects</a>
                <a href="#contact" onClick={handleScrollLink}>Contact</a>
                <div className="navbar__socials">
                    <a href="https://github.com/CodeFroge/sayanmajhi" target="_blank" rel="noreferrer">
                        <FaGithub />
                    </a>
                    <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noreferrer">
                        <FaLinkedin />
                    </a>
                    <a href="https://twitter.com/yourusername" target="_blank" rel="noreferrer">
                        <FaTwitter />
                    </a>
                </div>
            </nav>

            <div
                className={`navbar__toggle ${menuOpen ? "open" : ""}`}
                onClick={() => setMenuOpen(!menuOpen)}
            >
                <span></span>
                <span></span>
                <span></span>
            </div>
        </header>
    );
};

export default Navbar;
