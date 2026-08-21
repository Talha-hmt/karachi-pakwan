import { PHONE_NUMBER, PHONE_DISPLAY } from '../data/menu.js'
import './Navbar.css'

export default function Navbar() {
  return (
    <header className="navbar">
      <div className="container navbar-row">
        <a href="#top" className="navbar-brand">
          <span className="navbar-mark" aria-hidden="true">🍛</span>
          Karachi Pakwan
        </a>

        <nav className="navbar-links" aria-label="Primary">
          <a href="#menu">Menu</a>
          <a href="#how-it-works">How it works</a>
          <a href="#location">Location</a>
        </nav>

        <a href={`tel:${PHONE_NUMBER}`} className="navbar-phone">
          <span aria-hidden="true">📞</span> {PHONE_DISPLAY}
        </a>
      </div>
    </header>
  )
}
