
import { Link } from "react-router-dom";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";

import "./Grant.css";
import "../styles/global.css";
import "../styles/variables.css";

const grantImpacts = [
  {
    icon: "bi-heart",
    title: "Empowering Grassroots",
    description:
      "Supporting organizations that work directly with communities and understand their needs from the ground level.",
  },
  {
    icon: "bi-people",
    title: "Supporting Changemakers",
    description:
      "Providing resources to individuals and organizations dedicated to creating meaningful social change.",
  },
  {
    icon: "bi-bar-chart",
    title: "Creating Sustainable Impact",
    description:
      "Helping initiatives strengthen their work and create lasting benefits for the communities they serve.",
  },
  {
    icon: "bi-stars",
    title: "Amplifying Visibility",
    description:
      "Giving grassroots organizations the recognition they need to reach more people and build stronger partnerships.",
  },
];

function Grant() {
  return (
    <div className="grant-page">

       <Navbar />
      {/* HERO SECTION */}
      <section className="inner-hero grant-hero">
        <div className="hero-img">
          <img
            src="/image/about.webp"
            alt="Community initiatives supported by the Shrihaan Sahayog Grant"
            fetchPriority="high"
          />
        </div>

        <div className="inner-hero-overlay" aria-hidden="true" />

       

        <div className="inner-hero-content">
          <span className="grant-eyebrow">
            ADHISHRIHAAN FOUNDATION
          </span>

          <h1>
            Nurturing Dreams,
            <br />
            Fueling Impact
          </h1>

          <h2>The Shrihaan Sahayog Grant</h2>

          <p>
            Empowering grassroots organizations to create meaningful
            and lasting change.
          </p>

          <Link to="/donate" className="grant-hero-btn">
            Support Our Mission
            <i className="bi bi-arrow-up-right" aria-hidden="true" />
          </Link>
        </div>

        <div className="grant-hero-bottom" aria-hidden="true">
          <span>EMPOWER</span>
          <span className="grant-hero-line" />
          <span>SUPPORT</span>
          <span className="grant-hero-line" />
          <span>TRANSFORM</span>
        </div>
      </section>

      {/* INTRODUCTION */}
      <section
        className="grant-intro section-padding"
        aria-labelledby="grant-intro-title"
      >
        <div className="grant-page-container">
          <div className="grant-intro-content">
            <span className="grant-section-label">
              SMALL GRANTS. MEANINGFUL CHANGE.
            </span>

            <h2 id="grant-intro-title">
              The Shrihaan Sahayog Grant
            </h2>

            <p>
              As a testament to our unwavering commitment to direct
              and impactful support, Adhishrihaan Foundation proudly
              offers the Shrihaan Sahayog Grant.
            </p>

            <p>
              This annual grant provides critical funding to 3–5
              carefully selected micro-NGOs undertaking powerful
              ground-level work but often constrained by limited
              visibility or financial resources.
            </p>

            <p>
              Designed to provide flexible, timely, and meaningful
              support, the grant helps organizations create measurable
              change within their communities.
            </p>

            <div className="grant-intro-note">
              <span className="grant-note-icon">
                <i className="bi bi-people-fill" aria-hidden="true" />
              </span>

              <span>
                Investing in local organizations. Strengthening
                communities. Inspiring lasting change.
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* IMPACT SECTION */}
      <section
        className="grant-impact"
        aria-labelledby="grant-impact-title"
      >
        <div className="grant-page-container">
          <div className="grant-section-heading">
            <span className="grant-section-label">
              OUR APPROACH
            </span>

            <h2 id="grant-impact-title">
              How the Grant Makes a Difference
            </h2>

            <p>
              Meaningful change begins at the grassroots level.
              Our grant helps local changemakers turn their commitment
              into action and build stronger communities.
            </p>
          </div>

          <div className="grant-impact-grid">
            {grantImpacts.map((impact, index) => (
              <article
                className="grant-impact-card"
                key={impact.title}
                style={{ "--card-index": index }}
              >
                <div className="grant-card-top">
                  <div className="grant-icon">
                    <i
                      className={`bi ${impact.icon}`}
                      aria-hidden="true"
                    />
                  </div>

                  <span className="grant-card-number">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>

                <h3>{impact.title}</h3>

                <p>{impact.description}</p>

                <div
                  className="grant-card-accent"
                  aria-hidden="true"
                />
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CALL TO ACTION */}
      <section className="grant-cta">
        <div className="grant-cta-decoration" aria-hidden="true">
          <span />
          <span />
          <span />
        </div>

        <div className="grant-cta-inner">
          <span className="grant-cta-label">
            BE PART OF THE CHANGE
          </span>

          <h2>
            Supporting Those Who <span>Create Change</span>
          </h2>

          <p>
            Together, we can strengthen grassroots organizations,
            nurture local leadership, and help meaningful work reach
            even more communities.
          </p>

          <Link to="/donate" className="grant-cta-btn">
            Support Our Mission
            <i className="bi bi-arrow-right" aria-hidden="true" />
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default Grant;