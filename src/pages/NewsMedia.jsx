import { Link } from "react-router-dom";

import Navbar from "../component/Navbar";
import Footer from "../component/Footer";

import "../styles/variables.css";
import "../styles/global.css";
import "./NewsMedia.css";


function NewsMedia() {
  return (
    <div className="news-page">

      {/* NAVBAR */}
        <Navbar />

      {/* =================================================
          HERO
      ================================================= */}

      <section className="inner-hero news-hero">

        {/* HERO IMAGE */}
        <div className="hero-img">

          <img
            src="/image/news.webp"
            alt="Adhishrihaan Foundation News and Media"
          />

        </div>


        {/* DARK OVERLAY */}
        <div className="inner-hero-overlay"></div>


        


        {/* HERO TITLE */}
        <div className="inner-hero-content">

          <h1>
            Adhishrihaan Foundation
            <br />
            in the News
          </h1>

        </div>

      </section>


      {/* =================================================
          INTRO
      ================================================= */}

      <section className="news-intro">

        <div className="news-container">

          <span className="section-label">
            NEWS &amp; MEDIA
          </span>

          <h2>
            News &amp; Media
          </h2>

          <p>
            Stay informed about the latest initiatives, impact stories,
            and milestones from Adhishrihaan Foundation and our incredible
            grassroots partners. This section provides a glimpse into our
            efforts to amplify voices, foster change, and build a narrative
            of compassion and progress.
          </p>

        </div>

      </section>


      {/* =================================================
          COMING SOON
      ================================================= */}

      <section className="news-section">

        <div className="news-container">

          <div className="news-coming-soon">

            <h3>
              Coming Soon
            </h3>

            <Link
              to="/"
              className="news-home-btn"
            >
              Back to Home
            </Link>

          </div>

        </div>

      </section>


      {/* =================================================
          FOOTER
      ================================================= */}

      <Footer />

    </div>
  );
}

export default NewsMedia;