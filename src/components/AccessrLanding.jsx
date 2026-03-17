import '../style/AccessrLanding.css'

import AaiconImg from '../asset/Aaicon.png'
import KeyboardImg from '../asset/keyboardicon.png'
import SearchImg from '../asset/searchicon.png'
import TranslateImg from '../asset/translateicon.png'
import LogoImg from '../asset/logo.png'
import EaaBadge from '../asset/Frame 2147225867.png'
import WcagBadge from '../asset/WCAG.png'
import AdaBadge from '../asset/ada.png'
import GdprBadge from '../asset/GDPR.png'

function AccessrLanding() {
  return (
    <>
      {/* ══════════════════════════════════
         HERO
      ══════════════════════════════════ */}
      <section className="accessr-hero-card">

        {/* ── Icon 1: Aa Typography (top-left) ── */}
        <div className="accessr-float-icon accessr-icon-aa">
          <img src={AaiconImg} alt="Font accessibility icon" />
        </div>

        {/* ── Icon 2: Keyboard (top-right) ── */}
        <div className="accessr-float-icon accessr-icon-kb">
          <img src={KeyboardImg} alt="Keyboard accessibility icon" />
        </div>

        {/* ── Icon 3: Font Size (bottom-left) ── */}
        <div className="accessr-float-icon accessr-icon-sz">
          <img src={SearchImg} alt="Font size accessibility icon" />
        </div>

        {/* ── Icon 4: Language Translate (bottom-right) ── */}
        <div className="accessr-float-icon accessr-icon-tr">
          <img src={TranslateImg} alt="Translation accessibility icon" />
        </div>

        {/* ── Content ── */}
        <div className="accessr-hero-content">
          <div className="accessr-trust-badge">
            <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
              <path d="M10 2L3 5v5c0 4.4 3 7.7 7 9 4-1.3 7-4.6 7-9V5l-7-3z" />
              <polyline points="7,10 9,12 13,8" />
            </svg>
            Trusted by 20,000 Websites
          </div>

          <h1 className="accessr-hero-title">Ready to make your<br />site accessible?</h1>

          <p className="accessr-hero-sub">
            Try Accessr free today. No credit card required<br />
            set it up in minutes and see the difference.
          </p>

          <a href="https://x.com/620Sundram" className="accessr-btn-cta">
            Try For Free
            <svg viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </a>
        </div>
      </section>

      {/* ══════════════════════════════════
         FOOTER
      ══════════════════════════════════ */}
      <footer className="accessr-footer-wrap">
        <div className="accessr-footer-top">

          {/* Brand */}
          <div className="accessr-brand-col">
            <div className="accessr-brand-logo">
              <img src={LogoImg} alt="Accessr Logo" />
              <span className="accessr-brand-name">accessr</span>
            </div>
            <p className="accessr-brand-desc">
              Accessr makes websites more inclusive with simple, powerful accessibility and language tools — all activated with just one line of code.
            </p>
          </div>

          {/* Nav columns */}
          <div className="accessr-nav-cols">

            <div className="accessr-nav-col">
              <h4>Navigation</h4>
              <ul>
                <li>
                  <a href="#">
                    <span className="accessr-nav-icon">
                      <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round">
                        <rect x="2" y="2" width="5" height="5" rx="1" />
                        <rect x="9" y="2" width="5" height="5" rx="1" />
                        <rect x="2" y="9" width="5" height="5" rx="1" />
                        <rect x="9" y="9" width="5" height="5" rx="1" />
                      </svg>
                    </span>
                    Features
                  </a>
                </li>
                <li>
                  <a href="#">
                    <span className="accessr-nav-icon">
                      <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round">
                        <circle cx="8" cy="8" r="6" />
                        <line x1="8" y1="2" x2="8" y2="6" />
                        <line x1="8" y1="10" x2="8" y2="14" />
                      </svg>
                    </span>
                    Pricing
                  </a>
                </li>
                <li>
                  <a href="#">
                    <span className="accessr-nav-icon">
                      <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round">
                        <circle cx="8" cy="5.5" r="2.5" />
                        <path d="M2 14c0-3 2.7-5.5 6-5.5s6 2.5 6 5.5" />
                      </svg>
                    </span>
                    How it works
                  </a>
                </li>
              </ul>
            </div>

            <div className="accessr-nav-col">
              <h4>Help</h4>
              <ul>
                <li>
                  <a href="#">
                    <span className="accessr-nav-icon">
                      <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round">
                        <path d="M14 10a2 2 0 01-2 2H4l-2 2V4a2 2 0 012-2h8a2 2 0 012 2v6z" />
                      </svg>
                    </span>
                    Contact
                  </a>
                </li>
                <li>
                  <a href="#">
                    <span className="accessr-nav-icon">
                      <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round">
                        <circle cx="8" cy="8" r="6" />
                        <path d="M8 11v-4" />
                        <circle cx="8" cy="5" r=".5" fill="currentColor" />
                      </svg>
                    </span>
                    FAQ
                  </a>
                </li>
                <li>
                  <a href="#">
                    <span className="accessr-nav-icon">
                      <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round">
                        <polyline points="4,6 1,8 4,10" />
                        <polyline points="12,6 15,8 12,10" />
                        <line x1="9" y1="4" x2="7" y2="12" />
                      </svg>
                    </span>
                    Integration
                  </a>
                </li>
              </ul>
            </div>

            <div className="accessr-nav-col">
              <h4>Social</h4>
              <ul>
                <li>
                  <a href="#">
                    <span className="accessr-nav-icon">
                      <svg viewBox="0 0 16 16" fill="currentColor">
                        <path d="M13 2H3a1 1 0 00-1 1v10a1 1 0 001 1h5V9H6V7h2V5.5A2.5 2.5 0 0110.5 3H12v2h-1.5c-.28 0-.5.22-.5.5V7h2l-.5 2H10v5h3a1 1 0 001-1V3a1 1 0 00-1-1z" />
                      </svg>
                    </span>
                    LinkedIn
                  </a>
                </li>
                <li>
                  <a href="#">
                    <span className="accessr-nav-icon">
                      <svg viewBox="0 0 16 16" fill="currentColor">
                        <path d="M15 3.5a6.2 6.2 0 01-1.65.45 2.9 2.9 0 001.27-1.6 5.8 5.8 0 01-1.83.7A2.88 2.88 0 008 5.5c0 .23.03.45.07.66A8.2 8.2 0 011.64 3a2.88 2.88 0 00.89 3.85 2.85 2.85 0 01-1.3-.36v.04c0 1.4.99 2.56 2.3 2.83a2.9 2.9 0 01-1.3.05 2.88 2.88 0 002.69 2A5.77 5.77 0 011 12.78 8.17 8.17 0 005.47 14c5.37 0 8.3-4.45 8.3-8.3l-.01-.38A5.9 5.9 0 0015 3.5z" />
                      </svg>
                    </span>
                    Twitter
                  </a>
                </li>
                <li>
                  <a href="#">
                    <span className="accessr-nav-icon">
                      <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round">
                        <rect x="3" y="3" width="10" height="10" rx="3" />
                        <circle cx="8" cy="8" r="2.3" />
                        <circle cx="11.2" cy="4.8" r=".5" fill="currentColor" stroke="none" />
                      </svg>
                    </span>
                    Instagram
                  </a>
                </li>
              </ul>
            </div>

          </div>
        </div>

        {/* Compliance badges */}
        <div className="accessr-compliance-row">
          <div className="accessr-compliance-card">
            <div className="accessr-badge-seal">
              <img src={EaaBadge} alt="EAA Badge" />
            </div>
            <div className="accessr-badge-text">
              <h5>EAA Support</h5>
              <p>European Accessibility Act</p>
            </div>
          </div>

          <div className="accessr-compliance-card">
            <div className="accessr-badge-seal">
              <img src={WcagBadge} alt="WCAG Badge" />
            </div>
            <div className="accessr-badge-text">
              <h5>WCAG Support</h5>
              <p>Web Content Accessibility Guidelines</p>
            </div>
          </div>

          <div className="accessr-compliance-card">
            <div className="accessr-badge-seal">
              <img src={AdaBadge} alt="ADA Badge" />
            </div>
            <div className="accessr-badge-text">
              <h5>ADA Support</h5>
              <p>Americans with Disabilities Act</p>
            </div>
          </div>

          <div className="accessr-compliance-card">
            <div className="accessr-badge-seal">
              <img src={GdprBadge} alt="GDPR Badge" />
            </div>
            <div className="accessr-badge-text">
              <h5>GDPR</h5>
              <p>GDPR Compliant</p>
            </div>
          </div>
        </div>

        {/* Footer bottom bar */}
        <div className="accessr-footer-bottom">
          <span>© Copyright 2025, All Rights Reserved by Accessr</span>
          <div className="accessr-footer-links">
            <a href="#">Terms and Conditions</a>
            <a href="#">Privacy Policy</a>
            <a href="#">Legal</a>
          </div>
        </div>
      </footer>
    </>
  )
}

export default AccessrLanding
