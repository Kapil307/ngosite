
import { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";
import "./Contact.css";

function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  const socialLinks = [
    { name: "Instagram", url: "https://www.instagram.com/" },
    { name: "LinkedIn", url: "https://www.linkedin.com/" },
    { name: "Facebook", url: "https://www.facebook.com/" },
    { name: "YouTube", url: "https://www.youtube.com/" },
  ];

  return (
    <div className="contact-page">
      <Navbar />

      <main className="contact-main">
        <section className="contact-card">
          {/* LEFT CONTACT PANEL */}
          <div className="contact-info">
            <div className="contact-intro">
              <span className="contact-eyebrow">
                ADHISHRIHAAN FOUNDATION
              </span>

              <h1>
                You Have Questions,
                <br />
                We Have Answers
              </h1>

              <p>
                Discover how we work with communities and partners to
                create meaningful change. Our team is here to help with
                your questions, ideas, and enquiries.
              </p>
            </div>

            <div className="contact-details">
              <div className="contact-detail">
                <h2>Location</h2>
                <p>
                  Adhishrihaan Foundation
                  <br />
                  India
                  <br />
                  Monday–Saturday
                </p>
              </div>

              <div className="contact-detail">
                <h2>Social Media</h2>

                <div className="contact-social-links">
                  {socialLinks.map((social) => (
                    <a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noreferrer"
                    >
                      {social.name}
                    </a>
                  ))}
                </div>
              </div>

              <div className="contact-detail">
                <h2>Email</h2>
                <a href="mailto:info@adhishrihaan.com">
                  info@adhishrihaan.com
                </a>
              </div>

              <div className="contact-detail">
                <h2>Contact</h2>
                <a href="tel:+910000000007">
                  +91 00 00 00 07
                </a>
              </div>
            </div>
          </div>

          {/* RIGHT CONTACT FORM */}
          {submitted ? (
            <div className="contact-success" role="status">
              <div className="success-icon">
                <i className="bi bi-check-lg" aria-hidden="true" />
              </div>

              <h2>Thank You!</h2>

              <p>
                Your form has been submitted successfully.
              </p>

              <button
                type="button"
                className="contact-reset-btn"
                onClick={() => setSubmitted(false)}
              >
                Send Another Message
              </button>
            </div>
          ) : (
            <form
              className="contact-form"
              onSubmit={(event) => {
                event.preventDefault();
                setSubmitted(true);
              }}
            >
              <span className="contact-form-eyebrow">
                GET IN TOUCH
              </span>

              <h2>Tell Us What You Need</h2>

              <p>
                Our team is ready to assist you. Fill in the form
                and let us know how we can help.
              </p>

              <div className="form-grid">
                <input
                  type="text"
                  name="firstName"
                  placeholder="First Name"
                  aria-label="First Name"
                  autoComplete="given-name"
                  required
                />

                <input
                  type="text"
                  name="lastName"
                  placeholder="Last Name"
                  aria-label="Last Name"
                  autoComplete="family-name"
                  required
                />

                <input
                  type="text"
                  name="country"
                  placeholder="Country"
                  aria-label="Country"
                  autoComplete="country-name"
                  required
                />

                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone Number"
                  aria-label="Phone Number"
                  autoComplete="tel"
                  required
                />
              </div>

              <input
                type="email"
                name="email"
                placeholder="Email Address"
                aria-label="Email Address"
                autoComplete="email"
                required
              />

              <textarea
                name="message"
                placeholder="Message"
                aria-label="Message"
                rows={4}
                required
              />

              <label className="consent">
                <input type="checkbox" name="updates" />
                <span>
                  I'd like to receive exclusive offers and updates.
                </span>
              </label>

              <button type="submit">
                Submit Enquiry
                <i className="bi bi-arrow-right" aria-hidden="true" />
              </button>

              <p className="contact-form-note">
                We appreciate your interest in our work.
              </p>
            </form>
          )}
        </section>

        {/* MAP */}
        <section
          className="contact-map"
          aria-label="Foundation location map"
        >
          <iframe
            title="Foundation location map"
            src="https://maps.google.com/maps?q=India&t=&z=5&ie=UTF8&iwloc=&output=embed"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </section>

        <div className="contact-back-home">
          <Link to="/" className="contact-home-link">
            <i className="bi bi-arrow-left" aria-hidden="true" />
            Back to Home
          </Link>
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default ContactPage;
