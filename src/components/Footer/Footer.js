import fb from "../../assets/fb.png";
import Logo from "../../assets/Logo.png";
import './sass/footer.css';
import { Link } from "react-router-dom";

export default function Footer() {
    return (
        <footer className="footer">
            <div className="footer-segment">
                <div className="footer-logo"><img src={Logo} alt="" /></div>
                <nav className="footer-nav">
                    <ul>
                        <li><Link to="/">HOME</Link></li>
                        <li><Link to="/about-us">ABOUT US</Link></li>
                        <li><Link to="/portfolio">PORTFOLIO</Link></li>
                        <li><Link to="/contact">CONTACT</Link></li>
                    </ul>
                </nav>
                <a href="/"><img src={fb} alt="" /></a>
            </div>
            <div className="footer-segment">
                <div className="footer-rules">
                    <a href="/">Terms of Service</a>
                    <div></div>
                    <a href="/">Privacy Policy</a>
                </div>
            </div>
        </footer>
    )
}