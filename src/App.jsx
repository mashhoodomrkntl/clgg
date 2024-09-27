import React from "react";
import Navbar from "./Components/Navabar/Navbar";
import Hero from "./Components/Hero/Hero";
import Programs from "./Components/Programs/Programs";
import Title from "./Components/Title/Title";
import About from "./Components/About/About";
import Campus from "./Components/Campus/Campus";
import Testimonials from "./Components/Testimonials/Testimonials";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";

function App() {
    return (
        <div>
            <Navbar />
            <Hero />
            <div className="container">
                <Title subTitle="our program" title="What we offer" />
                <Programs />
                <About/>
                <Title subTitle="Gallery" title="Campus Photos" />
                <Campus/>
                <Title subTitle="TESTIMONIALS" title="What students says" />
                <Testimonials/> 
                <Title subTitle="CONTACT US" title="Get in Touch" />
                <Contact/>
                <Footer/>
            </div>
        </div>
    );
}

export default App;
