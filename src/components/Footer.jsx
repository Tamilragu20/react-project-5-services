import './Footer.css';

const CURRENT_YEAR = new Date().getFullYear();

function Footer({ brandName, location, email }) {
  return (
    <footer className="agency-footer">
      <div className="container agency-footer-inner">
        <div>
          <strong className="agency-footer-brand">{brandName}</strong>
          <p className="agency-footer-meta">
            {location} · {email}
          </p>
        </div>

        <div className="agency-footer-links">
          <a href="#services">Services</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </div>
      </div>

      <div className="container agency-footer-bottom">
        <span>&copy; {CURRENT_YEAR} {brandName}. All rights reserved.</span>
      </div>
    </footer>
  );
}

export default Footer;
