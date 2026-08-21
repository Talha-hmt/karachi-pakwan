import Navbar from '../components/Navbar.jsx'
import Hero from '../components/Hero.jsx'
import MenuSection from '../components/MenuSection.jsx'
import HowItWorks from '../components/HowItWorks.jsx'
import ContactSection from '../components/ContactSection.jsx'
import BottomBar from '../components/BottomBar.jsx'
import Footer from '../components/Footer.jsx'
import { biryaniMenu, drinksMenu } from '../data/menu.js'

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />

      <section id="menu" className="section">
        <div className="container">
          <MenuSection
            eyebrow="Today's Pot"
            title="Special Biryani Menu"
            lede="Cooked in small batches so it's never sitting around waiting for an order."
            items={biryaniMenu}
          />
          <MenuSection
            eyebrow="Chilled & Ready"
            title="Cold Drinks — 1 Litre"
            items={drinksMenu}
          />
        </div>
      </section>

      <HowItWorks />
      <ContactSection />
      <Footer />
      <BottomBar />
    </>
  )
}
