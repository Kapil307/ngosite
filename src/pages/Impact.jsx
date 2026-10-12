
import { Link } from "react-router-dom";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";

import "../styles/variables.css";
import "../styles/global.css";
import "./Impact.css";

const impactSections = [
  {
    icon: "bi-heart-pulse",
    title: "Beneficiary Stories",
    description:
      "Discover inspiring stories of individuals and families whose lives have been transformed through meaningful support.",
    link: "/beneficiary-stories",
    number: "01",
  },
  {
    icon: "bi-bullseye",
    title: "Project Spotlight",
    description:
      "Explore grassroots initiatives, meet the people behind them, and discover the progress they are making.",
    link: "/project-spotlight",
    number: "02",
  },
  {
    icon: "bi-graph-up-arrow",
    title: "Impact Reports",
    description:
      "Explore our achievements, measurable outcomes, and transparent reporting on the communities we support.",
    link: "/impact-reports",
    number: "03",
  },
  {
    icon: "bi-camera-reels",
    title: "Photo & Video Galleries",
    description:
      "Experience the real moments, dedicated people, and communities that bring our mission to life.",
    link: "/gallery",
    number: "04",
  },
];

function Impact() {
  return (
    <div className="impact-page">
      {/* HERO SECTION */}
      <section className="impact-hero">
        <img
          className="impact-hero-image"
          src="/image/impact.webp"
          alt="Communities creating positive change"
        />

        <div className="impact-overlay"></div>

        <div className="impact-navbar">
          <Navbar />
        </div>

        <div className="impact-hero-content">
          <span className="impact-eyebrow">
            OUR WORK. OUR PURPOSE. OUR IMPACT.
          </span>

          <h1>
            Witness the Change.
            <br />
            <span>Real Stories, Real Impact.</span>
          </h1>

          <p>
            Every life touched tells a story. Every community empowered
            brings us one step closer to a better tomorrow.
          </p>

          <Link to="/donate" className="impact-hero-btn">
            Be Part of the Change
            <i className="bi bi-arrow-up-right" aria-hidden="true"></i>
          </Link>
        </div>

        <div className="impact-hero-bottom">
          <span>COMMUNITY</span>
          <span className="impact-bottom-line"></span>
          <span>COMPASSION</span>
          <span className="impact-bottom-line"></span>
          <span>CHANGE</span>
        </div>
      </section>

      {/* INTRODUCTION */}
      <section className="impact-content">
        <div className="impact-container">
          <div className="impact-intro">
            <div className="impact-intro-label">
              <span></span>
              MAKING A DIFFERENCE
            </div>

            <h2>
              Our Impact, <span>Our Inspiration</span>
            </h2>

            <p>
              At Adhishrihaan Foundation, our work is defined by the
              transformations we help create through our grassroots partners.
              We believe in the power of every story, every life touched,
              and every community uplifted.
            </p>

            <p>
              From children accessing education to women developing
              vocational skills and animals receiving care, every effort
              represents a step towards a more compassionate and empowered
              society. These are the stories that inspire us to keep going.
            </p>
          </div>

          {/* IMPACT CARDS */}
          <div className="impact-explore-heading">
            <div>
              <span className="impact-section-label">
                STORIES THAT MATTER
              </span>
              <h3>Explore Our Impact</h3>
            </div>

            <p>
              Discover the people, projects, and progress behind our mission.
            </p>
          </div>

          <div className="impact-cards">
            {impactSections.map((item) => (
              <article className="impact-card" key={item.number}>
                <div className="impact-card-top">
                  <span className="impact-card-icon">
                    <i
                      className={`bi ${item.icon}`}
                      aria-hidden="true"
                    ></i>
                  </span>

                  <span className="impact-card-number">
                    {item.number}
                  </span>
                </div>

                <h4>{item.title}</h4>

                <p>{item.description}</p>

                <Link to={item.link} className="impact-link">
                  Explore More
                  <i
                    className="bi bi-arrow-right"
                    aria-hidden="true"
                  ></i>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CALL TO ACTION */}
      <section className="impact-cta">
        <div className="impact-cta-decoration impact-cta-decoration-one"></div>
        <div className="impact-cta-decoration impact-cta-decoration-two"></div>

        <div className="impact-cta-inner">
          <span className="impact-cta-label">
            TOGETHER, WE CAN DO MORE
          </span>

          <h2>
            Be Part of the <span>Change</span>
          </h2>

          <p>
            Your support can help strengthen grassroots organizations,
            empower communities, and create opportunities for a better future.
          </p>

          <div className="impact-cta-buttons">
            <Link to="/donate" className="impact-donate-btn">
              Donate Today
              <i className="bi bi-heart-fill" aria-hidden="true"></i>
            </Link>

            <Link to="/volunteer" className="impact-volunteer-btn">
              Become a Volunteer
              <i className="bi bi-arrow-right" aria-hidden="true"></i>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default Impact;