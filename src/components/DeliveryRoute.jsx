import './DeliveryRoute.css'

const PATH = 'M12,70 C90,10 180,120 260,55 C320,10 360,40 388,20'

export default function DeliveryRoute() {
  return (
    <div className="route" aria-hidden="true">
      <svg className="route-svg" viewBox="0 0 400 130" fill="none">
        <path d={PATH} className="route-path" />
        <text x="4" y="112" className="route-label">KITCHEN</text>
        <text x="352" y="14" className="route-label" textAnchor="end">YOUR DOOR</text>
      </svg>
      <div className="route-dot" />
    </div>
  )
}
