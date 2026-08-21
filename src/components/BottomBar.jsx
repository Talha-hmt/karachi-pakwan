import { PHONE_NUMBER, whatsappLink } from '../data/menu.js'
import './BottomBar.css'

export default function BottomBar() {
  return (
    <div className="bottom-bar">
      <a href={`tel:${PHONE_NUMBER}`} className="bottom-bar-btn bottom-bar-call">
        📞 Call Now
      </a>
      <a
        href={whatsappLink('I want to order')}
        className="bottom-bar-btn bottom-bar-whatsapp"
        target="_blank"
        rel="noopener noreferrer"
      >
        💬 WhatsApp Order
      </a>
    </div>
  )
}
