import './Hero.css';

function Hero({ tagline, heading, description, metrics }) {
  return (
    <section id="top" className="hero-section">
      <div className="container hero-grid">
        <div className="hero-copy">
          <span className="hero-badge">{tagline}</span>
          <h1 className="hero-title">{heading}</h1>
          <p className="hero-description">{description}</p>

          <div className="hero-actions">
            <a href="#services" className="hero-btn-primary">
              Explore Services
            </a>
            <a href="#contact" className="hero-btn-secondary">
              Book Discovery Call
            </a>
          </div>
        </div>

        <div className="hero-metrics">
          {metrics.map((metric) => (
            <div key={metric.label} className="metric-card">
              <span className="metric-value">{metric.value}</span>
              <span className="metric-label">{metric.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Hero;
