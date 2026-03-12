import { useState } from "react";
import "../style/StatusBoard.css";

function StatusIcon({ type, tone }) {
  if (type === "spinner") {
    return (
      <svg viewBox="0 0 32 32" aria-hidden="true" className={`status-icon ${tone}`}>
        <g fill="none" stroke="currentColor" strokeWidth="2.8" strokeLinecap="round">
          <path d="M16 3.5v5.2" opacity="0.95" />
          <path d="M16 23.3v5.2" opacity="0.28" />
          <path d="M5.7 16h5.2" opacity="0.62" />
          <path d="M21.1 16h5.2" opacity="0.38" />
          <path d="M8.7 8.7l3.7 3.7" opacity="0.82" />
          <path d="M19.6 19.6l3.7 3.7" opacity="0.22" />
          <path d="M23.3 8.7l-3.7 3.7" opacity="0.5" />
          <path d="M12.4 19.6l-3.7 3.7" opacity="0.14" />
        </g>
      </svg>
    );
  }

  if (type === "pause") {
    return (
      <svg viewBox="0 0 32 32" aria-hidden="true" className={`status-icon ${tone}`}>
        <circle cx="16" cy="16" r="13.5" fill="none" stroke="currentColor" strokeWidth="2.2" />
        <path d="M12.2 11.3v9.4M19.8 11.3v9.4" fill="none" stroke="currentColor" strokeWidth="2.8" strokeLinecap="round" />
      </svg>
    );
  }

  if (type === "check") {
    return (
      <svg viewBox="0 0 32 32" aria-hidden="true" className={`status-icon ${tone}`}>
        <circle cx="16" cy="16" r="13.5" fill="none" stroke="currentColor" strokeWidth="2.2" />
        <path d="M10.1 16.5l4.1 4.2 8-9" fill="none" stroke="currentColor" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  }

  if (type === "heart") {
    return (
      <svg viewBox="0 0 32 32" aria-hidden="true" className={`status-icon ${tone}`}>
        <path
          d="M16 27.1 5.8 16.9a6.5 6.5 0 0 1 9.2-9.2L16 8.7l1-1a6.5 6.5 0 1 1 9.2 9.2Z"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  if (type === "alert") {
    return (
      <svg viewBox="0 0 32 32" aria-hidden="true" className={`status-icon ${tone}`}>
        <circle cx="16" cy="16" r="13.5" fill="none" stroke="currentColor" strokeWidth="2.2" />
        <path d="M16 9.4v9.1" fill="none" stroke="currentColor" strokeWidth="2.8" strokeLinecap="round" />
        <circle cx="16" cy="22.5" r="1.6" fill="currentColor" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 32 32" aria-hidden="true" className={`status-icon ${tone}`}>
      <path d="M9.6 8.2h12.8M11.6 8.2v-2h8.8v2M11.1 11.2v12.1a2.9 2.9 0 0 0 2.9 2.9h4a2.9 2.9 0 0 0 2.9-2.9V11.2" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function StatusPill({ label, tone, activeTone, icon }) {
  const [active, setActive] = useState(tone !== "muted");

  const currentTone = active ? activeTone : "muted";

  return (
    <div
      className={`status-pill ${currentTone}`}
      onClick={() => setActive((prev) => !prev)}
      style={{ cursor: "pointer", userSelect: "none" }}
    >
      <span className="status-pill__icon">
        <StatusIcon type={icon} tone={currentTone} />
      </span>
      <span className="status-pill__label">{label}</span>
    </div>
  );
}

export default function StatusBoard() {
  return (
    <section className="status-board">
      <div className="status-board__grid">
        {/* Row 1 */}
        <div className="status-row">
          <StatusPill label="Pending" tone="pending" activeTone="pending" icon="spinner" />
        </div>

        {/* Row 2 */}
        <div className="status-row">
          <StatusPill label="Paused" tone="muted" activeTone="paused" icon="pause" />
          <StatusPill label="Success" tone="success" activeTone="success" icon="check" />
        </div>

        {/* Row 3 */}
        <div className="status-row">
          <StatusPill label="Favourite" tone="favorite" activeTone="favorite" icon="heart" />
          <StatusPill label="At Risk" tone="muted" activeTone="atrisk" icon="alert" />
        </div>

        {/* Row 4 */}
        <div className="status-row">
          <StatusPill label="Archived" tone="muted" activeTone="archived" icon="trash" />
        </div>
      </div>
    </section>
  );
}
