import { PHONE_NUMBER, PHONE_DISPLAY, ADDRESS, whatsappLink } from '../data/menu.js'
import './ContactSection.css'

export default function ContactSection() {
  return (
    <section id="location" className="section contact">
      <div className="container contact-card">
        <div>
          <p className="eyebrow">Find Us</p>
          <h2 className="section-heading">Location &amp; contact</h2>

          <dl className="contact-details">
            <div>
              <dt>Address</dt>
              <dd>📍 {ADDRESS}</dd>
            </div>
            <div>
              <dt>Phone</dt>
              <dd>📞 {PHONE_DISPLAY}</dd>
            </div>
          </dl>
        </div>

        <div className="contact-ctas">
          <a href={`tel:${PHONE_NUMBER}`} className="btn btn-call">
            📞 Direct Call
          </a>
          <a
            href={whatsappLink('I want to order')}
            className="btn btn-whatsapp"
            target="_blank"
            rel="noopener noreferrer"
          >
            WhatsApp Us
          </a>
        </div>
      </div>
    </section>
  )
}
