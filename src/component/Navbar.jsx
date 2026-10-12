import { Link } from "react-router-dom";
import "./Navbar.css"

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg site-navbar">
      <div className="container-fluid navbar-inner">

        {/* Logo */}
        <Link className="navbar-brand site-logo" to="/">
          Adhishrihaan
        </Link>

        {/* Mobile Toggle */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#mainNavbar"
          aria-controls="mainNavbar"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <i className="bi bi-list"></i>
        </button>

        {/* Navbar */}
        <div
          className="collapse navbar-collapse"
          id="mainNavbar"
        >
          <ul className="navbar-nav ms-auto align-items-lg-center">

            {/* HOME */}
            <li className="nav-item">
              <Link className="nav-link" to="/">
                HOME
              </Link>
            </li>

            {/* ABOUT */}
            <li className="nav-item">
              <Link className="nav-link" to="/about">
                ABOUT
              </Link>
            </li>

            {/* GRANT */}
            <li className="nav-item">
              <Link className="nav-link" to="/grant">
                THE SHRIHAAN SAHYOG GRANT
              </Link>
            </li>

            {/* INITIATIVES */}
            <li className="nav-item">
              <Link className="nav-link" to="/initiatives">
                INITIATIVES
              </Link>
            </li>

            {/* IMPACT */}
            <li className="nav-item">
              <Link className="nav-link" to="/impact">
                OUR IMPACT
              </Link>
            </li>

            {/* EVENTS DROPDOWN */}
            <li className="nav-item dropdown">

              <button
                className="nav-link dropdown-toggle"
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                EVENTS
              </button>

              <ul className="dropdown-menu">

                <li>
                  <Link
                    className="dropdown-item"
                    to="/events"
                  >
                    UPCOMING EVENTS
                  </Link>
                </li>

                <li>
                  <Link
                    className="dropdown-item"
                    to="/pastevents"
                  >
                    PAST EVENTS
                  </Link>
                </li>

              </ul>

            </li>

            {/* NEWS */}
            <li className="nav-item">
              <Link className="nav-link" to="/news">
                NEWS & MEDIA
              </Link>
            </li>

            {/* GET INVOLVED DROPDOWN */}
            <li className="nav-item dropdown">

              <button
                className="nav-link dropdown-toggle"
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                GET INVOLVED
              </button>

              <ul className="dropdown-menu">

                <li>
                  <Link
                  className="dropdown-item"
                  to="/donate"
                  >
                  DONATE
                  </Link>
                </li>

                <li>
                  <Link
                    className="dropdown-item"
                    to="/volunteer"
                  >
                    VOLUNTEER
                  </Link>
                </li>

                <li>
                  <Link
                    className="dropdown-item"
                    to="/involve"
                  >
                    INVOLVE
                  </Link>
                </li>

              </ul>

            </li>

          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;