import ServiceCard from './ServiceCard';
import './ServicesList.css';

function ServicesList({ services, about }) {
  return (
    <>
      <section id="services" className="services-section">
        <div className="container">
          <div className="section-head">
            <span className="section-kicker">What We Do</span>
            <h2 className="section-title">Agency Services</h2>
            <p className="section-subtitle">
              Focused capabilities designed to take digital products from concept to production.
            </p>
          </div>

          <div className="services-grid">
            {services.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="about-section">
        <div className="container about-box">
          <div className="about-text">
            <span className="section-kicker">About Our Studio</span>
            <h2 className="section-title">{about.aboutHeading}</h2>
            <p className="about-desc">{about.aboutDescription}</p>
          </div>

          <ul className="about-pillars">
            {about.aboutPillars.map((pillar) => (
              <li key={pillar} className="pillar-item">
                <span className="pillar-dot" />
                <span>{pillar}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}

export default ServicesList;
