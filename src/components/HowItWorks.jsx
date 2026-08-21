import { steps } from '../data/menu.js'
import './HowItWorks.css'

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="section how">
      <div className="container">
        <p className="eyebrow">Start to Doorstep</p>
        <h2 className="section-heading">How ordering works</h2>

        <ol className="how-list">
          {steps.map((step) => (
            <li key={step.n} className="how-step">
              <span className="how-num">{step.n}</span>
              <div>
                <h3>{step.title}</h3>
                <p>{step.desc}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
