import React from 'react'
import './footer.css'
import { IoLogoFacebook } from "react-icons/io5";
import { IoLogoInstagram } from "react-icons/io5";
import { IoLogoLinkedin } from "react-icons/io5";

const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo'>Hari</a>

      <ul className="permalinks">
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#testimonials">Testimonials</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer__socials">
        <a href="https://facebook.com"><IoLogoFacebook /></a>
        <a href="https://instagram.com"><IoLogoInstagram /></a>
        <a href="https://linkedin.com"><IoLogoLinkedin /></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; Srihari Palakollu. All Rights Reserved.</small>
      </div>
    </footer>
  )
}

export default Footer