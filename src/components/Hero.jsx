import { PHONE_NUMBER } from '../data/menu.js'
import { whatsappLink } from '../data/menu.js'
import DeliveryRoute from './DeliveryRoute.jsx'
import './Hero.css'

export default function Hero() {
  return (
    <section id="top" className="hero">
      <div className="container hero-grid">
        <div className="hero-copy">
          <p className="eyebrow">Karachi · Home Delivery Only</p>
          <h1 className="hero-title">
            Biryani hot.
            <br />
            Delivery free.
          </h1>
          <p className="section-lede hero-lede">
            One pot, cooked fresh per order, dropped straight at your door —
            call or WhatsApp and we'll take it from there.
          </p>

          <div className="hero-badge">
            <span aria-hidden="true">🛵</span> Free Home Delivery
          </div>

          <div className="hero-ctas">
            <a href={`tel:${PHONE_NUMBER}`} className="btn btn-call">
              📞 Call Now
            </a>
            <a
              href={whatsappLink('I want to place an order')}
              className="btn btn-whatsapp"
              target="_blank"
              rel="noopener noreferrer"
            >
              WhatsApp Order
            </a>
          </div>
        </div>

        <div className="hero-visual">
          <div className="hero-photo-frame">
            <img
              src="https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=700&auto=format&fit=crop&q=80"
              alt="Full plate of Karachi Pakwan biryani, ready for delivery"
            />
            <span className="hero-photo-tag">FULL PLATE · RS 350</span>
          </div>
          <DeliveryRoute />
        </div>
      </div>
    </section>
  )
}
