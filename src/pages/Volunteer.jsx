import Navbar from "../component/Navbar";
import Footer from "../component/Footer";
import "./Volunteer.css";

function Volunteer() {

  const handleSubmit = (e) => {
    e.preventDefault();

    alert("Thank you for registering as a volunteer! We will contact you soon.");

    e.target.reset();
  };

  return (
    <div className="volunteer-page">

         <Navbar />

      {/* =========================
          HERO SECTION
      ========================= */}
      <section className="volunteer-hero">

       

        <div className="volunteer-hero-image">
          <img
            src="/image/volunteer.webp"
            alt="Volunteers working together"
          />
        </div>

        <div className="volunteer-hero-overlay"></div>

        <div className="volunteer-hero-content">
          <h1>Volunteer: Lend Your Time &amp; Skills</h1>
        </div>

      </section>


      {/* =========================
          VOLUNTEER CONTENT
      ========================= */}
      <main className="volunteer-main">

        <div className="volunteer-container">

          <div className="volunteer-intro">
            <h2>Join Us as a Volunteer</h2>

            <p>
              Your time, skills, and support can make a meaningful
              difference. Join us and contribute towards creating
              positive change in the community.
            </p>
          </div>


          {/* =========================
              VOLUNTEER FORM
          ========================= */}
          <div className="volunteer-form-card">

            <h2>Volunteer Registration</h2>

            <form onSubmit={handleSubmit}>

              <div className="volunteer-form-group">
                <label htmlFor="name">Full Name</label>

                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Enter your full name"
                  required
                />
              </div>


              <div className="volunteer-form-group">
                <label htmlFor="email">Email</label>

                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Enter your email"
                  required
                />
              </div>


              <div className="volunteer-form-group">
                <label htmlFor="phone">Phone Number</label>

                <input
                  type="number"
                  min="10"
                
                  id="phone"
                  name="phone"
                  placeholder="Enter your phone number"
                  required
                />
              </div>


              <div className="volunteer-form-group">
                <label htmlFor="interest">Area of Interest</label>

                <select
                  id="interest"
                  name="interest"
                  defaultValue=""
                  required
                >
                  <option value="" disabled>
                    Select an area
                  </option>

                  <option value="education">
                    Education
                  </option>

                  <option value="environment">
                    Environment
                  </option>

                  <option value="community">
                    Community Development
                  </option>

                  <option value="events">
                    Events
                  </option>

                  <option value="other">
                    Other
                  </option>
                </select>
              </div>


              <div className="volunteer-form-group">
                <label htmlFor="message">Message</label>

                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  placeholder="Tell us how you would like to contribute"
                  required
                ></textarea>
              </div>


              <button
                type="submit"
                className="volunteer-submit"
              >
                SUBMIT
              </button>

            </form>

          </div>

        </div>

      </main>


      {/* =========================
          FOOTER
      ========================= */}
      <Footer />

    </div>
  );
}

export default Volunteer;