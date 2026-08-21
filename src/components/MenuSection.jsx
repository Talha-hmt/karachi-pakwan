import MenuCard from './MenuCard.jsx'
import './MenuSection.css'

export default function MenuSection({ eyebrow, title, lede, items }) {
  return (
    <div className="menu-block">
      {eyebrow && <p className="eyebrow">{eyebrow}</p>}
      <h2 className="section-heading">{title}</h2>
      {lede && <p className="section-lede">{lede}</p>}

      <div className="menu-grid">
        {items.map((item, i) => (
          <MenuCard key={item.id} item={item} index={i} />
        ))}
      </div>
    </div>
  )
}
