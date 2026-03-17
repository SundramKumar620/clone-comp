import React, { useState } from "react";
import "../style/LandingPage.css";

// Import assets — adjust paths based on your project structure
import logoSrc from "../asset/logoorange.png";
import h1LogoSrc from "../asset/h1logo.png";
import bgGridSrc from "../asset/bggridfull.png";
import cardsSrc from "../asset/card.png";
import thunder from "../asset/thunder.png"

const LandingPage = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="landing-page">

      {/* ── Mobile overlay ── */}
      <div
        className={`mobile-overlay ${menuOpen ? "active" : ""}`}
        onClick={() => setMenuOpen(false)}
      />

      {/* ── Navbar ── */}
      <nav className="navbar">
        <a href="/" className="navbar-brand">
          <img src={logoSrc} alt="Unemployed logo" />
          <span>Unemployed</span>
        </a>

        <ul className="navbar-links">
          <li><a href="#releases">Releases</a></li>
          <li><a href="#company">Company</a></li>
          <li><a href="#pricing">Pricing</a></li>
        </ul>

        <button className="btn-get-started navbar-cta-desktop">Get Started</button>

        {/* ── Hamburger button (mobile only) ── */}
        <button
          className={`hamburger ${menuOpen ? "open" : ""}`}
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
        >
          <span className="hamburger-line" />
          <span className="hamburger-line" />
          <span className="hamburger-line" />
        </button>
      </nav>

      {/* ── Mobile menu ── */}
      <div className={`mobile-menu ${menuOpen ? "open" : ""}`}>
        <ul className="mobile-menu-links">
          <li><a href="#releases" onClick={() => setMenuOpen(false)}>Releases</a></li>
          <li><a href="#company" onClick={() => setMenuOpen(false)}>Company</a></li>
          <li><a href="#pricing" onClick={() => setMenuOpen(false)}>Pricing</a></li>
        </ul>
        <button className="btn-get-started mobile-cta" onClick={() => setMenuOpen(false)}>
          Get Started
        </button>
      </div>

      {/* ── Hero ── */}
      <section className="hero">

        {/* Badge */}
        <div className="hero-badge">
          <img src={thunder} alt="" className="" />
          AI-base Jobs Discovery
        </div>

        {/* Headline */}
        <h1 className="hero-headline">
          Find Jobs{" "}
          <img
            src={h1LogoSrc}
            alt=""
            className="inline-icon"
            aria-hidden="true"
          />{" "}
          that
          <br />
          actually Match You
        </h1>

        {/* Subtext */}
        <p className="hero-subtext">
          Upload your CV or select your skills and get curated jobs instanly
        </p>

        {/* CTA Buttons */}
        <div className="hero-cta">
          <button className="btn-upload-cv">Upload Your CV</button>
          <button className="btn-how-it-works">How it Works</button>
        </div>

        {/* Cards preview */}
        <div className="hero-cards">
          <img src={cardsSrc} alt="Sample job listing cards" />
        </div>

      </section>
    </div>
  );
};

export default LandingPage;
