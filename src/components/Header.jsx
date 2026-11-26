import { useState } from 'react';
import './Header.css';

function Header({ brandName }) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="agency-header">
      <div className="container agency-header-inner">
        <a href="#top" className="agency-brand">
          <span className="agency-mark">ND</span>
          <span>{brandName}</span>
        </a>

        <button
          type="button"
          className="agency-menu-btn"
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-expanded={menuOpen}
          aria-label="Toggle navigation"
        >
          {menuOpen ? 'Close' : 'Menu'}
        </button>

        <nav className={`agency-nav ${menuOpen ? 'is-open' : ''}`} aria-label="Primary">
          <a href="#services" onClick={() => setMenuOpen(false)}>
            Services
          </a>
          <a href="#about" onClick={() => setMenuOpen(false)}>
            About
          </a>
          <a href="#contact" className="nav-cta" onClick={() => setMenuOpen(false)}>
            Start a Project
          </a>
        </nav>
      </div>
    </header>
  );
}

export default Header;
