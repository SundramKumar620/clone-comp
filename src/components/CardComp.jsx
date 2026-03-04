import React from "react";
import "../style/CardComp.css";

const CardComp = () => {
    return (
        <div className="cards-wrapper">

            {/* BLUE CARD */}
            <div className="card card-blue">
                <div className="hero">
                    <div className="hero-top">
                        <span className="plan-label">Enterprise Plan</span>
                        <span className="save-badge">Save 50%</span>
                    </div>
                    <div className="price-block">
                        <div className="price-amount">$50</div>
                        <div className="per-month">Per Month</div>
                    </div>
                </div>
                <div className="features">
                    <div className="tags-grid">
                        <span className="tag">Dashboard</span>
                        <span className="tag">Deal</span>
                        <span className="tag">Group View</span>
                        <span className="tag">Email</span>
                        <span className="tag">Email Sequence</span>
                        <span className="tag">Import CSV</span>
                        <span className="tag">WhatsApp Sync</span>
                        <span className="tag">API</span>
                        <span className="tag">Ai Follow-ups</span>
                    </div>
                </div>
                <div className="bottom">
                    <button className="cta-btn">Get Started</button>
                    <span className="billing-note">$600 Billed yearly</span>
                </div>
            </div>

            {/* ORANGE CARD */}
            <div className="card card-orange">
                <div className="hero">
                    <div className="hero-top">
                        <span className="plan-label">Enterprise Plan</span>
                        <span className="save-badge">Save 50%</span>
                    </div>
                    <div className="price-block">
                        <div className="price-amount">$50</div>
                        <div className="per-month">Per Month</div>
                    </div>
                </div>
                <div className="features">
                    <div className="tags-grid">
                        <span className="tag">Dashboard</span>
                        <span className="tag">Deal</span>
                        <span className="tag">Group View</span>
                        <span className="tag">Email</span>
                        <span className="tag">Email Sequence</span>
                        <span className="tag">Import CSV</span>
                        <span className="tag">WhatsApp Sync</span>
                        <span className="tag">API</span>
                        <span className="tag">Ai Follow-ups</span>
                    </div>
                </div>
                <div className="bottom">
                    <button className="cta-btn">Get Started</button>
                    <span className="billing-note">$600 Billed yearly</span>
                </div>
            </div>

        </div>
    );
};

export default CardComp;