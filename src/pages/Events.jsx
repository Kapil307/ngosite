import { useState } from "react";
import { Link } from "react-router-dom";

import Navbar from "../component/Navbar";
import Footer from "../component/Footer";

import "../styles/global.css";
import "../styles/variables.css";
import "./Events.css";

import pastEvents from "../data/pastEvents.json";

function Events() {
  const [activeTab, setActiveTab] = useState("upcoming");

  return (
    <div className="events-page">

       <Navbar />
      {/* HERO */}
      <section className="inner-hero events-hero">
        <div className="hero-img">
          <img
            src="/image/about.webp"
            alt="Community events and initiatives"
          />
        </div>

        <div className="inner-hero-overlay" />

       

        <div className="inner-hero-content">
          <span className="events-hero-eyebrow">
            OUR JOURNEY
          </span>

          <h1>
            {activeTab === "upcoming"
              ? "Upcoming Events"
              : "Past Events"}
          </h1>

          <p>
            Discover our initiatives and the difference
            we are making together.
          </p>
        </div>
      </section>

      {/* EVENTS SECTION */}
      <section className="events-section">
        <div className="events-container">
          <div className="events-section-heading">
            <span className="events-eyebrow">
              STAY CONNECTED
            </span>

            <h2>Explore Our Events</h2>

            <p>
              Be part of the initiatives that bring
              communities together.
            </p>
          </div>

          {/* TABS */}
          <div
            className="events-tabs"
            role="group"
            aria-label="Choose events category"
          >
            <button
              type="button"
              className={`events-tab ${
                activeTab === "upcoming" ? "active" : ""
              }`}
              aria-pressed={activeTab === "upcoming"}
              onClick={() => setActiveTab("upcoming")}
            >
              Upcoming Events
            </button>

            <button
              type="button"
              className={`events-tab ${
                activeTab === "past" ? "active" : ""
              }`}
              aria-pressed={activeTab === "past"}
              onClick={() => setActiveTab("past")}
            >
              Past Events
            </button>
          </div>

          {/* UPCOMING EVENTS */}
          {activeTab === "upcoming" && (
            <div
              className="events-coming-soon"
              aria-live="polite"
            >
              <div className="events-empty-icon" aria-hidden="true">
                <span>✦</span>
              </div>

              <span className="events-empty-label">
                SOMETHING MEANINGFUL IS ON THE WAY
              </span>

              <h3>Coming Soon</h3>

              <p>
                Exciting community initiatives and events
                are on the way. Stay connected and check
                back for the latest updates.
              </p>

              <Link
                to="/contact"
                className="green-btn"
              >
                GET IN TOUCH
                <span aria-hidden="true">→</span>
              </Link>
            </div>
          )}

          {/* PAST EVENTS */}
          {activeTab === "past" && (
            <div className="events-list" aria-live="polite">
              {pastEvents.length > 0 ? (
                pastEvents.map((event, index) => (
                  <article
                    className="event-card"
                    key={`${event.title}-${index}`}
                  >
                    <div className="event-card-image">
                      <img
                        src={event.image}
                        alt={event.title}
                        loading="lazy"
                      />
                    </div>

                    <div className="event-card-content">
                      <div className="event-card-meta">
                        {event.date && (
                          <span>
                            <i
                              className="bi bi-calendar3"
                              aria-hidden="true"
                            />
                            {event.date}
                          </span>
                        )}

                        {event.location && (
                          <span>
                            <i
                              className="bi bi-geo-alt"
                              aria-hidden="true"
                            />
                            {event.location}
                          </span>
                        )}
                      </div>

                      <h3>{event.title}</h3>

                      <p>{event.description}</p>

                      <Link
                        to="/impact"
                        className="green-btn"
                      >
                        VIEW IMPACT
                        <span aria-hidden="true">→</span>
                      </Link>
                    </div>
                  </article>
                ))
              ) : (
                <div className="events-empty-list">
                  <h3>No past events yet</h3>

                  <p>
                    Event updates will appear here once
                    they are available.
                  </p>
                </div>
              )}
            </div>
          )}
        </div>
      </section>

      {/* CALL TO ACTION */}
      <section className="events-cta">
        <div className="events-cta-inner">
          <span className="events-cta-eyebrow">
            MAKE A DIFFERENCE
          </span>

          <h2>Be Part of Our Journey</h2>

          <p>
            Join us in creating meaningful change,
            empowering communities and building a
            better future together.
          </p>

          <div className="events-cta-buttons">
            <Link
              to="/volunteer"
              className="outline-btn"
            >
              BECOME A VOLUNTEER
            </Link>

            <Link
              to="/donate"
              className="outline-btn outline-btn-light"
            >
              SUPPORT OUR MISSION
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default Events;