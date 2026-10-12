import { Link } from "react-router-dom";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";
import EventCard from "../component/EventCard";
import "../styles/variables.css"
import "../styles/global.css"
import "./PastEvents.css";
const past = [
    { title: "Guardians of all Voiceless – Cat Shelter Foundation Stone",
         date: "01-09-2025",
          location: "Patiala",
           image: "./image/animal-welfare.png",
            description: "In India, millions of street animals face challenges like lack of shelter, medical care and compassion." },
{ title: "Mega Health Checkup Camp",
     date: "2025",
      image: "./image/animal-shelter-team.png",
       description: "A community healthcare initiative focused on accessible medical support." },
{ title: "Anemia Screening Camp",
     date: "2025",
      image: "./image/anemia-screening.png",
       description: "A health awareness and screening initiative supporting community wellbeing." }
    ];
export default function PastEvents() {
    return<div>

         <Navbar />
        <section className="inner-hero events-hero">
            
            <img src="/image/about.webp" alt="Past Events" />
           
            <div className="inner-hero-overlay" />
            <div className="inner-hero-content">
                <h1>Past Events</h1>
            </div>
        </section>
        <section className="events-section">
            <div className="events-container">
                <div className="events-tabs">
                    <Link className="events-tab" to="/events">UPCOMING EVENTS</Link>
                    <Link className="events-tab active" to="/pastevents">PAST EVENTS</Link>
                </div><div className="events-list">
                    {past.map((e, i) =>
                     <EventCard key={i} event={e} showImpact />)}
                     </div>
                     </div>
                     </section>
                     <Footer/>
                     </div>
}
