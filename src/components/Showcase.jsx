export default function Showcase({ title, link, children, className }) {
  return (
    <div className={`showcase ${className || ""}`}>
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="showcase-title"
      >
        {title}
      </a>

      <div className="showcase-frame">
        {children}
      </div>
    </div>
  );
}