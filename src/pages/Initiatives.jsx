import { Link } from "react-router-dom";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";

import "../styles/variables.css";
import "../styles/global.css";
import "./Initiatives.css";

import initative from "../assets/initative.jpg";

import initiatives from "../data/initiatives.json";

import one from "../assets/one.png";
import elder from "../assets/elder.png";
import planting from "../assets/planting.png";
import education from "../assets/education.jpg";
import skilldevelopment from "../assets/skilldevelopment.jpg";


const initiativeImages = {
  "one.png": one,
  "elder.png": elder,
  "education.jpg": education,
  "planting.png": planting,
  "skilldevelopment.jpg": skilldevelopment,
};


function Initiatives() {
  return (
    <div className="initiatives-page">


 <Navbar />

      {/* HERO */}

      <section className="initiatives-hero">


        {/* Hero Image */}
        <div className="hero-img">
          <img
            src={initative}
            alt="Our Initiatives"
          />
        </div>

        {/* Dark Overlay */}
        <div className="inner-hero-overlay"></div>

        {/* Navbar */}
        <div className="initiatives-navbar">
         
        </div>

        {/* Hero Title */}
        <div className="inner-hero-content">
          <h1>Our Initiatives</h1>
        </div>

      </section>


      {/* INTRO */}

      <section className="initiatives-intro">

        <div className="initiatives-container">

          <h2>
            Creating Change Where It Matters Most
          </h2>

          <p>
            Our initiatives are rooted in compassion, community and
            meaningful action. We support efforts that address important
            social and environmental challenges while creating opportunities
            for individuals and communities to build a better future.
          </p>

        </div>

      </section>


      {/* INITIATIVES */}

      <section className="initiatives-list">

        <div className="initiatives-container">

          {initiatives.map((initiative, index) => (

            <article
              className={`initiative-item ${
                index % 2 !== 0 ? "initiative-reverse" : ""
              }`}
              key={initiative.title}
            >

              {/* IMAGE */}

              <div className="initiative-image">

                <img
                  src={initiativeImages[initiative.image]}
                  alt={initiative.title}
                  loading="lazy"
                />

              </div>


              {/* CONTENT */}

              <div className="initiative-content">

                <h2>
                  {initiative.title}
                </h2>

                <p>
                  {initiative.text}
                </p>

                <Link
                  to="/impact"
                  className="green-btn"
                >
                  KNOW MORE
                </Link>

              </div>

            </article>

          ))}

        </div>

      </section>


      {/* CTA */}

      <section className="initiatives-cta">

        <div className="initiatives-cta-inner">

          <h2>
            Together, We Can Create Greater Impact
          </h2>

          <p>
            Support initiatives that are helping communities move forward.
          </p>

          <Link
            to="/donate"
            className="outline-btn"
          >
            SUPPORT OUR MISSION
          </Link>

        </div>

      </section>


      <Footer />

    </div>
  );
}


export default Initiatives;