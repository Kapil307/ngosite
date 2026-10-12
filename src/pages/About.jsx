
import { Link } from "react-router-dom";

import Navbar from "../component/Navbar";
import Footer from "../component/Footer";

import "./About.css";

function About() {
  return (
    <div className="about-page">
      <Navbar />

      {/* =========================
          HERO SECTION
      ========================= */}
      <section className="inner-hero about-hero">
        <img
          className="about-hero-image"
          src="/image/about.webp"
          alt="Adhishrihaan community service"
        />

        <div className="inner-hero-overlay"></div>

        <div className="inner-hero-content">
          <span className="about-eyebrow">
            OUR STORY • OUR PURPOSE
          </span>

          <h1>Our Inspiration &amp; Ethos</h1>

          <p>Rooted in Love, Rising Through Service</p>

          <div className="about-hero-line"></div>
        </div>
      </section>

      {/* =========================
          ABOUT SECTION
      ========================= */}
      <section className="about-section">
        <div className="about-container about-intro">
          <span className="section-label">WHO WE ARE</span>

          <h2>About Adhishrihaan</h2>

          <div className="section-divider"></div>

          <p>
            Adhishrihaan is committed to creating meaningful change
            by empowering communities, supporting people in need,
            and building a better future through compassion and
            service.
          </p>

          <p>
            We believe that even the smallest act of kindness can
            make a meaningful difference. Through collective effort
            and dedicated service, we strive to create a society
            where everyone has the opportunity to grow and thrive.
          </p>
        </div>
      </section>

      {/* =========================
          PURPOSE SECTION
      ========================= */}
      <section className="about-section about-light">
        <div className="about-container purpose-layout">
          <div className="purpose-icon" aria-hidden="true">
            <i className="bi bi-heart-fill"></i>
          </div>

          <div className="purpose-content">
            <span className="section-label">WHY WE EXIST</span>

            <h2>Our Purpose</h2>

            <p>
              Our purpose is to serve communities with dedication,
              encourage positive development, and create
              opportunities that help people live with dignity
              and hope.
            </p>

            <p>
              We aim to turn compassion into action and inspire
              people to contribute towards a better tomorrow.
            </p>
          </div>
        </div>
      </section>

      {/* =========================
          VISION & MISSION
      ========================= */}
      <section className="about-section vision-mission-section">
        <div className="about-container">
          <div className="section-heading">
            <span className="section-label">OUR DIRECTION</span>

            <h2>Our Vision &amp; Mission</h2>

            <div className="section-divider"></div>

            <p>
              Guided by compassion, driven by purpose, and
              committed to creating lasting positive change.
            </p>
          </div>

          <div className="vision-mission-grid">
            {/* Vision Card */}
            <article className="vision-mission-card">
              <div className="card-icon" aria-hidden="true">
                <i className="bi bi-eye"></i>
              </div>

              <h3>Our Vision</h3>

              <p>
                We envision a society where every individual has
                the opportunity to grow, contribute, and build a
                secure and fulfilling future.
              </p>
            </article>

            {/* Mission Card */}
            <article className="vision-mission-card">
              <div className="card-icon" aria-hidden="true">
                <i className="bi bi-bullseye"></i>
              </div>

              <h3>Our Mission</h3>

              <p>
                Our mission is to transform lives through
                community initiatives, education, environmental
                responsibility, and compassionate action.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* =========================
          CALL TO ACTION
      ========================= */}
      <section className="about-cta">
        <div className="about-container">
          <span className="section-label">BE PART OF THE CHANGE</span>

          <h2>Let’s Build a Better Tomorrow Together</h2>

          <p>
            Join us in making a positive difference through
            compassion, community, and service.
          </p>

          <div className="about-cta-buttons">
            <Link to="/involve" className="about-btn about-btn-primary">
              Get Involved
              <i className="bi bi-arrow-right"></i>
            </Link>

            <Link to="/donate" className="about-btn about-btn-outline">
              Support Our Mission
            </Link>
          </div>
        </div>
      </section>

      {/* =========================
          FOOTER
      ========================= */}
      <Footer />
    </div>
  );
}

export default About;
