
import { Link } from "react-router-dom";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./Footer.css";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="site-footer">

      {/* Main Footer */}
      <div className="footer-inner">

        {/* Brand and Contact */}
        <div className="footer-brand">
          <Link to="/" className="footer-logo">
            <span className="logo-icon">
              <i className="bi bi-heart-fill"></i>
            </span>
            <span>Adhishrihaan</span>
          </Link>

          <p className="footer-description">
            Changing Lives, Building Futures.
            Together, we can create a better tomorrow.
          </p>

          <div className="footer-contact">

            <div className="contact-item">
              <i className="bi bi-envelope-fill"></i>
              <div>
                <span>Email Us</span>
                <p>info@adhishrihaan.com</p>
              </div>
            </div>

            <div className="contact-item">
              <i className="bi bi-telephone-fill"></i>
              <div>
                <span>Call Us</span>
                <p>+970 68 00 00 7</p>
              </div>
            </div>

          </div>
        </div>

        {/* Quick Links */}
        <div className="footer-navigation">
          <h3>Quick Links</h3>

          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/initiatives">Initiatives</Link></li>
            <li><Link to="/impact">Our Impact</Link></li>
            <li><Link to="/contact">Contact Us</Link></li>
          </ul>
        </div>

        {/* Social Media */}
        <div className="footer-social">
          <h3>Follow Us</h3>

          <p>
            Stay connected with us and follow our journey
            toward making a positive difference.
          </p>

          <div className="social-icons">

            <Link to="https://www.facebook.com/p/Adhishrihaan-Foundation-61580298832749/" target="_blank" aria-label="Facebook">
              <i className="bi bi-facebook"></i>
            </Link>

            <Link to="https://www.instagram.com/adhishrihaan" target="_blank" aria-label="Instagram">
              <i className="bi bi-instagram"></i>
            </Link>

            <Link to="https://x.com/adhishrihaan" target="_blank" aria-label="X">
              <i className="bi bi-twitter-x"></i>
            </Link>

            <Link to="https://www.linkedin.com/company/adhishrihaan" target="_blank" aria-label="LinkedIn">
              <i className="bi bi-linkedin"></i>
            </Link>

            <Link to="https://www.youtube.com/@Adhishrihaan?app=desktop&themeRefresh=1" target="_blank" aria-label="YouTube">
              <i className="bi bi-youtube"></i>
            </Link>

          </div>
        </div>

        {/* Donate Section */}
        <div className="footer-action">
          <div className="donate-icon">
            <i className="bi bi-heart-fill"></i>
          </div>

          <h3>Make a Difference</h3>

          <p>
            Your support can change lives and help build
            a brighter future for everyone.
          </p>

          <Link to="/donate" className="footer-donate">
            DONATE NOW
            <i className="bi bi-arrow-right"></i>
          </Link>
        </div>

      </div>

      {/* Bottom Footer */}
      <div className="footer-bottom">

        <p>
          © {currentYear} Adhishrihaan.
          All rights reserved.
        </p>

        <div className="footer-bottom-links">
          <Link to="/privacy-policy">Privacy Policy</Link>
          <Link to="/terms">Terms & Conditions</Link>
        </div>

        <Link to="/" className="back-to-top">
          Back to top
          <i className="bi bi-arrow-up-circle-fill"></i>
        </Link>

      </div>

    </footer>
  );
}

export default Footer;
