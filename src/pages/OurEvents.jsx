import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./OurEvents.css";

// Apni cropped JPG photos ko public/images/events/ folder mein rakhein.
const pastEvents = [
  {
    title: "Stationery Distribution at Mohali Slum",
    date: "11-09-2025",
    location: "Chandigarh",
    venue: "Udham Singh Colony in Sector 74, Mohali",
    category: "Education",
    description:
      "According to a 2023 report, people living in slum areas like Udham Singh Colony in Sector 74, Mohali, Chandigarh, face significant challenges. Often, these communities lack adequate infrastructure and educational resources.",
    image: "/image/stationery-distribution.png",
    alt: "Children at a stationery distribution event",
    link: "/events",
  },
  {
    title: "Guardians of all Voiceless – Cat Shelter Foundation Stone",
    date: "01-09-2025",
    location: "Patiala",
    venue: "Patiala",
    category: "Animal Welfare",
    description:
      "In India, millions of street animals face challenges like lack of shelter, medical care, and compassion. Animal welfare remains a critical concern in urban and rural areas.",
    image: "/image/animal-welfare.png",
    alt: "Volunteers at an animal welfare event",
    link: "/events",
  },
  {
    title: "Anemia Screening Camp",
    date: "05-09-2025",
    location: "Chandigarh",
    venue: "DON Bosco KAULI",
    category: "Woman and Child Welfare",
    description:
      "Anemia remains a significant public health concern in India, particularly among women and children. The screening camp helped raise awareness and encourage early health checks.",
    image: "/image/anemia-screening.png",
    alt: "Team at an anemia screening camp",
    link: "/events",
  },
  {
    title: "Guardians of all Voiceless – Cat Shelter Foundation Stone",
    date: "01-09-2025",
    location: "Patiala",
    venue: "Patiala",
    category: "Animal Welfare",
    description:
      "Volunteers and community members came together to support animal welfare and help create a safer future for voiceless animals.",
    image: "/image/animal-shelter-team.png",
    alt: "Volunteers and community members at an animal welfare event",
    link: "/events",
  },
];

// Upcoming events ke actual details milne par is array ko update karein.
const upcomingEvents = [];

export default function HomeEvents() {
  const [activeTab, setActiveTab] = useState("past");
  const [activeIndex, setActiveIndex] = useState(0);

  const events = activeTab === "past" ? pastEvents : upcomingEvents;

  useEffect(() => {
    if (events.length < 2) return;

    const timer = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % events.length);
    }, 5000);

    return () => window.clearInterval(timer);
  }, [events.length, activeTab]);

  const event = events[activeIndex];

  return (
    <section className="home-events">
      <header className="events-heading">
        <h2>Our Events</h2>
        <p>What’s Next &amp; What’s Been</p>

        <div className="events-tabs" role="tablist" aria-label="Event category">
          <button
            type="button"
            role="tab"
            aria-selected={activeTab === "past"}
            className={activeTab === "past" ? "active" : ""}
            onClick={() => {
              setActiveTab("past");
              setActiveIndex(0);
            }}
          >
            Past Events
          </button>

          <button
            type="button"
            role="tab"
            aria-selected={activeTab === "upcoming"}
            className={activeTab === "upcoming" ? "active" : ""}
            onClick={() => {
              setActiveTab("upcoming");
              setActiveIndex(0);
            }}
          >
            Upcoming Events
          </button>
        </div>
      </header>

      <div className="events-slider" aria-live="polite">
        {event ? (
          <>
            <article className="event-preview" key={`${activeTab}-${activeIndex}`}>
              <div className="event-image">
                <img src={event.image} alt={event.alt} loading="lazy" />
              </div>

              <div className="event-info">
                <h3>{event.title}</h3>

                <div className="event-meta">
                  <span>📅 {event.date}</span>
                  <span>📍 {event.location}</span>
                  {event.venue && <span>🏢 {event.venue}</span>}
                </div>

                <div className="event-tags">
                  <span className="event-tag past-tag">
                    {activeTab === "past" ? "Past Events" : "Upcoming Events"}
                  </span>
                  <span className="event-tag category-tag">{event.category}</span>
                </div>

                <p>{event.description}</p>

                <Link to={event.link} className="green-btn">
                  Read More
                </Link>
              </div>
            </article>

            <div className="event-dots" aria-label="Choose an event">
              {events.map((item, index) => (
                <button
                  key={`${item.title}-${index}`}
                  type="button"
                  className={index === activeIndex ? "active" : ""}
                  aria-label={`Show event ${index + 1}: ${item.title}`}
                  aria-current={index === activeIndex ? "true" : undefined}
                  onClick={() => setActiveIndex(index)}
                />
              ))}
            </div>
          </>
        ) : (
          <p className="no-events">
            No upcoming events to display right now. Please check back soon.
          </p>
        )}
      </div>
    </section>
  );
}