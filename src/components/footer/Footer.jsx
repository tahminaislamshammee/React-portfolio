import {BsFacebook, BsInstagram, BsTwitter } from 'react-icons/bs'
import './footer.css'
const Footer = () => {
    return ( 
        <footer>
            <a href="#" className="footer__logo">logo</a>

            <ul className="footer__links">
                <li><a href="#">home</a></li>
                <li><a href="#about">about</a></li>
                <li><a href="#experience">experience</a></li>
                <li><a href="#services">services</a></li>
                <li><a href="#portfolio">portfolio</a></li>
                <li><a href="#testimonials">testimonials</a></li>
                <li><a href="#contact">contact</a></li>
            </ul>

            <div className="footer__socials">
                <a href="https://facebook.com"><BsFacebook/></a>
                <a href="https://instagram.com"><BsInstagram/></a>
                <a href="https://twitter.com"><BsTwitter/></a>
            </div>

            <div className="footer__copyright">
                <small>&copy; all rights reserved</small>
            </div>
        </footer>
    );
}
 
export default Footer;