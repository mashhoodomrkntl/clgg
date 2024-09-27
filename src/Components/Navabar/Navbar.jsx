import React, { useEffect, useState } from "react";
import "./Navbar.css";
import logo from "../../assets/logo.png";
import menu_icon from "../../assets/menu-icon.png";
import { Link } from "react-scroll";

function Navbar() {
    const [mobileMenu, setMobileMenu] = useState(false);
    const toggleMenu = () => {
        mobileMenu ? setMobileMenu(false) : setMobileMenu(true);
    };

    const [sticky, setSticky] = useState(false);    

    useEffect(() => {
        window.addEventListener("scroll", () => {
            window.scrollY > 30 ? setSticky(true) : setSticky(false);
        });
    }, []);

    return (
        <nav className={`container ${sticky && "dark-nav"} `}> 
            <img src={logo} alt="logo_image" className="logo" />
            <ul className={mobileMenu? '': "hide-mobile-menu"}>
                <li>
                    <Link to="hero" smooth={true} offset={0} duration={500}>
                        Home
                    </Link>{" "}
                </li>
                <li>
                    {" "}
                    <Link to="programs" smooth={true} offset={-250} duration={500}>
                        Program
                    </Link>{" "}
                </li>
                <li>
                    {" "}
                    <Link to="about" smooth={true} offset={-150} duration={500}>
                        About us
                    </Link>{" "}
                </li>
                <li>
                    {" "}
                    <Link to="campus" smooth={true} offset={-250} duration={500}>
                        Campus
                    </Link>{" "}
                </li>
                <li>
                    {" "}
                    <Link to="testimonials" smooth={true} offset={-250} duration={500}>
                        Testimonial
                    </Link>{" "}
                </li>
                <li>
                    <Link to="contact" offset={-200} duration={1000} smooth={true} className="btn">
                        Contact us
                    </Link>
                </li>
            </ul>
            <img onClick={toggleMenu} src={menu_icon} alt="" className="menu-icon" />
        </nav>
    );
}

export default Navbar;
