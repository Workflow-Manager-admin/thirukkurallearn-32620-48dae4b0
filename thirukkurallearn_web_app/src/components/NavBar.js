import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./NavBar.css"; // If you want separate NavBar CSS, else use App.css

// PUBLIC_INTERFACE
/**
 * NavBar component for ThirukkuralLearn.
 * Persistent navigation bar with links to Home, About Thirukkural, and Quiz.
 * Responsive, uses theme colors.
 */
function NavBar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const toggleMobileMenu = () => setMobileOpen((open) => !open);

  return (
    <nav className="navbar themed-navbar" role="navigation" aria-label="Main navigation">
      <div className="navbar-inner">
        <div className="logo">
          <span className="logo-symbol" aria-label="Star" title="ThirukkuralLearn">*</span> ThirukkuralLearn
        </div>
        <button
          className="navbar-toggle"
          aria-label="Toggle navigation"
          aria-controls="nav-links"
          aria-expanded={mobileOpen}
          onClick={toggleMobileMenu}
        >
          <span className="hamburger" />
        </button>
        <ul
          className={`nav-links${mobileOpen ? " open" : ""}`}
          id="nav-links"
          role="list"
        >
          <li>
            <NavLink to="/" exact="true" className="nav-link" activeclassname="active" onClick={() => setMobileOpen(false)}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" className="nav-link" activeclassname="active" onClick={() => setMobileOpen(false)}>
              About Thirukkural
            </NavLink>
          </li>
          <li>
            <NavLink to="/quiz" className="nav-link" activeclassname="active" onClick={() => setMobileOpen(false)}>
              Quiz
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;
