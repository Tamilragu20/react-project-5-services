import { useState } from 'react';
import './Contact.css';

const initialForm = {
  name: '',
  email: '',
  service: 'Custom React Web Applications',
  message: '',
};

function validateForm(values) {
  const errors = {};
  if (!values.name.trim() || values.name.trim().length < 2) {
    errors.name = 'Please enter your name (at least 2 characters).';
  }
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(values.email.trim())) {
    errors.email = 'Please enter a valid email address.';
  }
  if (!values.message.trim() || values.message.trim().length < 10) {
    errors.message = 'Please share a brief project summary (at least 10 characters).';
  }
  return errors;
}

function Contact({ services, studioEmail }) {
  const [formData, setFormData] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [submittedName, setSubmittedName] = useState('');

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const validationErrors = validateForm(formData);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setSubmittedName('');
      return;
    }
    setSubmittedName(formData.name.trim());
    setErrors({});
    setFormData(initialForm);
  };

  return (
    <section id="contact" className="contact-section">
      <div className="container contact-grid">
        <div className="contact-intro">
          <span className="section-kicker">Get In Touch</span>
          <h2 className="section-title">Start a Conversation</h2>
          <p className="contact-copy">
            Tell us about your timeline and goals. We reply within one business day with a clear scope estimate.
          </p>
          <p className="contact-direct">
            Direct email: <strong>{studioEmail}</strong>
          </p>
        </div>

        <form className="contact-form" onSubmit={handleSubmit} noValidate>
          {submittedName && (
            <div className="form-success" role="status">
              Thank you, {submittedName}! Your inquiry has been recorded for review.
            </div>
          )}

          <div className="form-field">
            <label htmlFor="contact-name">Full Name</label>
            <input
              id="contact-name"
              name="name"
              type="text"
              placeholder="e.g., Priya Sharma"
              value={formData.name}
              onChange={handleChange}
            />
            {errors.name && <span className="field-error">{errors.name}</span>}
          </div>

          <div className="form-field">
            <label htmlFor="contact-email">Work Email</label>
            <input
              id="contact-email"
              name="email"
              type="email"
              placeholder="you@company.com"
              value={formData.email}
              onChange={handleChange}
            />
            {errors.email && <span className="field-error">{errors.email}</span>}
          </div>

          <div className="form-field">
            <label htmlFor="contact-service">Service Needed</label>
            <select
              id="contact-service"
              name="service"
              value={formData.service}
              onChange={handleChange}
            >
              {services.map((srv) => (
                <option key={srv.id} value={srv.title}>
                  {srv.title}
                </option>
              ))}
            </select>
          </div>

          <div className="form-field">
            <label htmlFor="contact-message">Project Details</label>
            <textarea
              id="contact-message"
              name="message"
              rows="4"
              placeholder="Briefly describe what you want to build..."
              value={formData.message}
              onChange={handleChange}
            />
            {errors.message && <span className="field-error">{errors.message}</span>}
          </div>

          <button type="submit" className="submit-btn">
            Send Inquiry
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
