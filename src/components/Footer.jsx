import React from 'react';
import { FaFacebookF, FaInstagram, FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => (
    <div className="container">
        <footer className="pt-4 my-md-5 pt-md-5 border-top">
            <div class="container-footer">
                <div class="footer_sections text-center">
                    <h5>Paola Andrea Hernández Velásquez</h5>
                    <section>
                        <div class="footer_icons text-center">
                          
                            <a href="#" target="_blank"><i><FaFacebookF /></i></a>
                            <a href="#" target="_blank"><i><FaInstagram /></i></a>
                            <a href="https://github.com/paolaA2494" target="_blank"><i><FaGithub /></i></a>
                            <a href="https://www.linkedin.com/in/paola-andrea-hern%C3%A1ndez-vel%C3%A1squez-038270175/" target="_blank"><i><FaLinkedin/></i></a>
               
                      </div>
                    </section>
                </div>
            </div>
        </footer>
        <script src="https://kit.fontawesome.com/cd2331958e.js" crossorigin="anonymous"></script>
    </div>
);

export default Footer;