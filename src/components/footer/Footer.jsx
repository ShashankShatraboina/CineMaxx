import React from "react";
import {
    FaFacebookF,
    FaInstagram,
    FaTwitter,
    FaLinkedin,
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
                    Explore a wide range of the latest and most acclaimed movies, ready for you to enjoy. Whether you love the big-screen experience, catching films on TV, or streaming on platforms like Netflix, Amazon Prime Video, Hotstar, Voot, or Jio Cinema, I have put together a curated list of top picks to make choosing your next watch easier.
                </div>

                {/*<div class="footer__socials">
                    <a href="https://www.linkedin.com/in/shashankshatraboina" target="_blank" class="home__social-icon">
                        <i class="uil uil-linkedin-alt"></i>
                    </a>
                    <a href="https://github.com/ShashankShatraboina" target="_blank" class="home__social-icon">
                        <i class="uil uil-github-alt"></i>
                    </a>
                    <a href="https://www.facebook.com/shashank.mudhiraj.33" target="_blank" class="footer__social">
                        <i class="uil uil-facebook"></i>
                    </a>
                    <a href="https://www.instagram.com/07___shashi/" target="_blank" class="footer__social">
                        <i class="uil uil-instagram"></i>
                    </a>
                    <a href="https://x.com/55823ShashankS" target="_blank" class="footer__social">
                        <i class="uil uil-twitter"></i>
                    </a>

                </div>*/}




                <div className="socialIcons">
                    <span className="icon">
                        <FaLinkedin />
                        <a href="https://www.linkedin.com/in/shashankshatraboina" target="_blank"></a>
                    </span>
                    <span className="icon">
                        <FaFacebookF />
                        <a href="https://www.facebook.com/shashank.mudhiraj.33" target="_blank"></a>
                    </span>
                    <span className="icon">
                        <FaInstagram />
                        <a href="https://www.instagram.com/07___shashi/" target="_blank"></a>
                    </span>
                    <span className="icon">
                        <FaTwitter />
                        <a href="https://x.com/55823ShashankS" target="_blank"></a>
                    </span>
                </div> 

                <div className="copyright">
                    &copy; 2025 Shatraboina Shashank. All Rights Reserved
                </div>

            </ContentWrapper>
        </footer>
    );
};

export default Footer;
