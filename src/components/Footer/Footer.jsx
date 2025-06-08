import React from "react";
import "./Footer.scss";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer__content">
                <p>&copy; {new Date().getFullYear()} MyPortfolio. All rights reserved.</p>
                <div className="footer__socials">
                    <a href="https://github.com/CodeFroge/sayanmajhi" target="_blank" rel="noopener noreferrer">
                        GitHub
                    </a>
                    <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer">
                        LinkedIn
                    </a>
                    <a href="mailto:sayanmajhi.deara01@gmail.com">Email</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
