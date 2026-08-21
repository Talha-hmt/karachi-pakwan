import { whatsappLink } from '../data/menu.js'
import './MenuCard.css'

export default function MenuCard({ item, index }) {
  const rotate = index % 2 === 0 ? '-1.1deg' : '1.1deg'

  return (
    <article className="chit" style={{ '--rotate': rotate }}>
      <div className="chit-tear" aria-hidden="true" />

      <div className="chit-photo">
        <img src={item.image} alt={item.name} loading="lazy" />
        {item.tag && <span className="chit-tag">{item.tag}</span>}
      </div>

      <div className="chit-body">
        <div className="chit-heading">
          <h3>{item.name}{item.size ? ` — ${item.size}` : ''}</h3>
          {item.spice && (
            <span className="chit-spice" title={`Spice level ${item.spice}/3`}>
              {'🌶️'.repeat(item.spice)}
            </span>
          )}
        </div>

        {item.desc && <p className="chit-desc">{item.desc}</p>}

        <div className="chit-divider" aria-hidden="true" />

        <div className="chit-footer">
          <span className="chit-price">Rs {item.price}</span>
          <a
            href={whatsappLink(item.whatsappText)}
            className="btn btn-whatsapp chit-cta"
            target="_blank"
            rel="noopener noreferrer"
          >
            Order Now
          </a>
        </div>
      </div>
    </article>
  )
}
