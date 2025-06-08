import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Hero from "../sections/Hero/Hero";
import About from "../sections/About/About";
import Projects from "../sections/Projects/Projects";
import Contact from "../sections/Contact/Contact";
import Footer from "../components/Footer/Footer";

const Home = () => {
    return (
        <>
            <Navbar />
            <main>
                <Hero />
                <About />
                <Projects />
                <Contact />
            </main>
            <Footer />
        </>
    );
};

export default Home;
