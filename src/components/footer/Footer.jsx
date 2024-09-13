import React from "react";
import {
    FaFacebookF,
    FaInstagram,
    FaTwitter,
    FaLinkedin,
    FaGithub,
} from "react-icons/fa";

import ContentWrapper from "../contentWrapper/ContentWrapper";

import "./style.scss";

const Footer = () => {
    return (
        <footer className="footer">
            <ContentWrapper>
                <ul className="menuItems">
                    <li className="menuItem">Terms Of Use</li>
                    <li className="menuItem">Privacy-Policy</li>
                    <li className="menuItem">About</li>
                    <li className="menuItem">Blog</li>
                    <li className="menuItem">FAQ</li>
                </ul>
                <div className="infoText">
                Movie Cultivator – Your cinematic portal, built with React.js and powered by TMDB. Enjoy dynamic carousels, infinite scroll, and lazy loading for a seamless experience. Dive into detailed movie and TV show info, including ratings and trailers.
                </div>
                <div className="socialIcons">
                    <span className="icon">
                        <a href="https://www.facebook.com/abhishekcultivates" target="_blank" rel="noopener noreferrer">
                            <FaFacebookF  color="white" size={30}/>
                        </a>
                    </span>
                    <span className="icon">
                        <a href="https://www.instagram.com/abhishekcultivates/" target="_blank" rel="noopener noreferrer">
                            <FaInstagram   color="white" size={30}/>
                        </a>
                    </span>
                    <span className="icon">
                        <a href="https://twitter.com/a_cultivates" target="_blank" rel="noopener noreferrer">
                            <FaTwitter   color="white" size={30}/>
                        </a>
                    </span>
                    <span className="icon">
                        <a href="https://www.linkedin.com/in/abhishekcultivates/" target="_blank" rel="noopener noreferrer">
                            <FaLinkedin   color="white" size={30}/>
                        </a>
                    </span>
                    <span className="icon">
                        <a href="https://github.com/abhishekcultivates" target="_blank" rel="noopener noreferrer">
                            <FaGithub   color="white" size={30}/>
                        </a>
                    </span>
                </div>

            </ContentWrapper>
        </footer>
    );
};

export default Footer;
