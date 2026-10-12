
import { Link } from "react-router-dom";
import "./EventCard.css";

export default function EventCard({ event, showImpact = false }) {
  // Prevent errors if event data is missing
  if (!event) return null;

  return (
    <article className="event-card">

      {/* Event Image */}
      {event.image && (
        <div className="event-card-image">
          <img
            src={event.image}
            alt={event.title || "Event"}
            loading="lazy"
          />
        </div>
      )}

      {/* Event Details */}
      <div className="event-card-content">

        {/* Date and Location */}
        {(event.date || event.location) && (
          <div className="event-card-meta">

            {event.date && (
              <span>
                <i className="bi bi-calendar3" aria-hidden="true"></i>
                {event.date}
              </span>
            )}

            {event.location && (
              <span>
                <i className="bi bi-geo-alt" aria-hidden="true"></i>
                {event.location}
              </span>
            )}

          </div>
        )}

        {/* Title */}
        <h2>{event.title}</h2>

        {/* Description */}
        {event.description && (
          <p>{event.description}</p>
        )}

        {/* View Impact Button */}
        {showImpact && (
          <Link to="/impact" className="green-btn">
            VIEW IMPACT
            <i className="bi bi-arrow-right" aria-hidden="true"></i>
          </Link>
        )}

      </div>
    </article>
  );
}

