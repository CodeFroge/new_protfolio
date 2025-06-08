import React from "react";
import { Link } from "react-router-dom";
import "./NotFound.scss";

const NotFound = () => {
    return (
        <section className="notfound">
            <div className="notfound__container">
                <h1>404</h1>
                <p>Oops! The page you are looking for does not exist.</p>
                <Link to="/">Go back Home</Link>
            </div>
        </section>
    );
};

export default NotFound;
