import { Link } from "react-router-dom";

import Navbar from "../component/Navbar";
import Footer from "../component/Footer";
import PetsIcon from '@mui/icons-material/Pets';
import "../styles/global.css";
import "../styles/variables.css";
import "./Involve.css";

function Involve() {
  return (
    <div className="involve-page">

<Navbar />

      {/* =========================================
          HERO
      ========================================= */}

      <section className="involve-hero">

        <div className="involve-hero-image">
          <img
            src="/image/about.webp"
            alt="Get involved and support our mission"
          />
        </div>

        <div className="involve-hero-overlay"></div>

        

        <div className="involve-hero-content">
          <h1>Get Involved</h1>
        </div>

      </section>


      {/* =========================================
          INTRO
      ========================================= */}

      <section className="involve-intro">

        <div className="involve-container">

          <h2>
            Your Compassion, Our Collective Strength:
            <br />
            Join the Journey of Seva!
          </h2>

          <p>
            Every act of kindness, every contribution, and every hour of
            dedication fuels the vital work of grassroots changemakers
            across Punjab. Adhishrihaan Foundation aligns multiple pathways
            for you to become a cherished part of our mission and directly
            contribute to sustainable social impact. Your involvement helps
            nurture initiatives with unparalleled care.
          </p>

          <p>
            <strong>Donate: Fueling Transformation</strong>
          </p>

          <p>
            Your financial support directly empowers our partner NGOs to
            continue their critical work on the ground. Every rupee you
            contribute helps us provide vital resources, expand programs,
            and reach more lives in need.
          </p>

          <p>
            <strong>Care in Action:</strong> Your generosity is the lifeline
            that sustains ground-level efforts, ensuring help reaches where
            it is needed most.
          </p>

        </div>

      </section>


      {/* =========================================
          DONATION SECTION
      ========================================= */}

      <section className="involve-options">

        <div className="involve-container">

          <h3 className="involve-section-title">
            How Your Donation Helps
          </h3>

          <div className="involve-help-grid">

            {/* HEALTH */}
            <div className="involve-help-card">

              <i className="bi bi-heart-pulse-fill"></i>

              <h4>Health</h4>

              <p>
                Provides crucial funding for health camps and medical
                supplies.
              </p>

            </div>


            {/* EDUCATION */}
            <div className="involve-help-card">

              <i className="bi bi-mortarboard-fill"></i>

              <h4>Education</h4>

              <p>
                Supports educational resources and after-school programs.
              </p>

            </div>


            {/* WOMEN */}
            <div className="involve-help-card">

              <i className="bi bi-person-arms-up"></i>

              <h4>
                Women and
                <br />
                Child Welfare
              </h4>

              <p>
                Enables vocational training for women and youth.
              </p>

            </div>


            {/* ANIMAL */}
            <div className="involve-help-card ">

              <i><PetsIcon className="paw-icon" /></i>

              <h4>Animal Welfare</h4>

              <p>
                Contributes to animal rescue and care.
              </p>

            </div>


            {/* ELDERLY */}
            <div className="involve-help-card">

              <i className="bi bi-person-wheelchair"></i>

              <h4>Elderly Care</h4>

              <p>
                Supports dignity and care for the elderly.
              </p>

            </div>

          </div>


          {/* BUTTONS */}

          <div className="involve-buttons">

            <Link
              to="/donate"
              className="involve-btn"
            >
              Donate Now
            </Link>

            <Link
              to="/donate"
              className="involve-btn"
            >
              Become a Monthly Donor
            </Link>

          </div>

        </div>

      </section>


      {/* =========================================
          CTA
      ========================================= */}

      <section className="involve-cta">

        <div className="involve-cta-inner">

          <h2>
            Every Contribution Matters
          </h2>

          <p>
            Be part of a journey that turns support into meaningful
            opportunities and lasting impact.
          </p>

          <Link
            to="/volunteer"
            className="outline-btn"
          >
            GET INVOLVED
          </Link>

        </div>

      </section>


      {/* FOOTER */}

      <Footer />

    </div>
  );
}

export default Involve;