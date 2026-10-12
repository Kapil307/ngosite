import { Link } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";

import "../styles/global.css";
import "../styles/variables.css";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";
import "./Donate.css";

function Donate() {
  return (
    <div className="donate-page">

      <Navbar />
      {/* Hero Section */}
      <section className="donate-hero">
        <img
          src="/image/about.webp"
          alt="Supporting community transformation"
          className="donate-hero-image"
        />

        <div className="donate-hero-overlay" />

        <Navbar />

        <div className="donate-hero-content">
          <div className="donate-hero-inner">
            <span className="donate-eyebrow">
              MAKE A DIFFERENCE
            </span>

            <h1>Donate: Fuelling Transformation</h1>

            <p>
              Your generosity helps us create stronger
              communities and meaningful opportunities.
            </p>

            <a href="#donation-options" className="donate-hero-btn">
              DONATE NOW
            </a>
          </div>
        </div>
      </section>

      {/* Donation Section */}
      <section
        className="donation-section"
        id="donation-options"
      >
        <Container>
          <div className="donation-heading">
            <span className="section-eyebrow">
              SUPPORT OUR MISSION
            </span>

            <h2>Be the Change You Want to See</h2>

            <p>
              Every contribution, big or small, can help
              build a brighter future.
            </p>
          </div>

          <Row className="justify-content-center g-4">
            {/* UPI Donation */}
            <Col xs={12} md={6} lg={5}>
              <div className="donate-card upi-card">
                <div className="donate-card-icon">
                  <span aria-hidden="true">₹</span>
                </div>

                <h3>Donate via UPI</h3>

                <p className="donate-card-description">
                  Quick, convenient and secure digital payments.
                </p>

                <div className="bank-logo-wrapper">
                  <img
                    src="/images/icici-bank.png"
                    alt="ICICI Bank"
                    className="icici-logo"
                    loading="lazy"
                  />
                </div>

                <p className="foundation-name">
                  M/S. ADHISHRHAAN FOUNDATION
                </p>

                <div className="qr-wrapper">
                  <p className="scan-text">
                    Scan the QR code to donate
                  </p>

                  <img
                    src="/images/upi-qr.png"
                    alt="UPI QR code for Adhishrhaan Foundation donations"
                    className="upi-qr"
                    loading="lazy"
                  />
                </div>

                <div className="upi-id-wrapper">
                  <span className="upi-id-label">UPI ID</span>

                  <p className="upi-id">
                    MSADHISHRHAANFOUNDATION@icici
                  </p>
                </div>

                <div className="upi-bottom">
                  <strong>BHIM</strong>
                  <span className="upi-divider">/</span>
                  <strong>UPI</strong>
                </div>

                <div className="payment-logos">
                  <span>iMobile</span>
                  <span>G Pay</span>
                  <span>BHIM</span>
                </div>
              </div>
            </Col>

            {/* NEFT / RTGS Donation */}
            <Col xs={12} md={6} lg={5}>
              <div className="donate-card neft-card">
                <div className="donate-card-icon">
                  <span aria-hidden="true">↗</span>
                </div>

                <h3>Donate via NEFT/RTGS</h3>

                <p className="donate-card-description">
                  Prefer a bank transfer? We plan to provide
                  our bank transfer details here.
                </p>

                <div className="neft-illustration">
                  <span aria-hidden="true">₹</span>
                </div>

                <span className="neft-status">
                  BANK DETAILS
                </span>

                <p className="neft-message">
                  Details Coming Soon
                </p>

                <p className="neft-note">
                  Please contact our team if you need
                  assistance with your donation.
                </p>

                <Link
                  to="/footer"                 className="donate-contact-btn"
                >
                  CONTACT US
                  <span aria-hidden="true">→</span>
                </Link>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Call to Action */}
      <section className="donate-cta">
        <Container>
          <div className="donate-cta-inner ">
            <span className="cta-eyebrow color-success">
              TOGETHER, WE CAN DO MORE
            </span>

            <h2>Every Contribution Matters</h2>

            <p>
              Your support can help strengthen communities,
              empower individuals and create meaningful
              opportunities for a better tomorrow.
            </p>

            <div className="donate-cta-actions">
              <Link to="/volunteer" className="outline-btn">
                BECOME A VOLUNTEER
              </Link>

            </div>
          </div>
        </Container>
      </section>

      <Footer />
    </div>
  );
}

export default Donate;