import './ServiceCard.css';

function ServiceCard({ service }) {
  return (
    <article className="service-card">
      <div className="service-card-top">
        <span className="service-tag">{service.tag}</span>
        <span className="service-timeline">{service.timeline}</span>
      </div>

      <h3 className="service-title">{service.title}</h3>
      <p className="service-description">{service.description}</p>

      <ul className="deliverables-list">
        {service.deliverables.map((item) => (
          <li key={item} className="deliverable-pill">
            {item}
          </li>
        ))}
      </ul>
    </article>
  );
}

export default ServiceCard;
