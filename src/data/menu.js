export const WHATSAPP_NUMBER = '923061335235'
export const PHONE_NUMBER = '+923061335235'
export const PHONE_DISPLAY = '+92 306 1335235'
export const ADDRESS = 'Malik Plaza, Karachi Pakwan'

export function whatsappLink(message) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`
}

export const biryaniMenu = [
  {
    id: 'full-biryani',
    name: 'Full Plate Biryani',
    price: 350,
    tag: 'Bestseller',
    spice: 3,
    desc: 'Layered basmati rice slow-cooked with spiced meat, Karachi-style — a full meal for one hungry person.',
    image: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=500&auto=format&fit=crop&q=80',
    whatsappText: 'I want to order Full Plate Biryani',
  },
  {
    id: 'half-biryani',
    name: 'Half Plate Biryani',
    price: 250,
    tag: null,
    spice: 3,
    desc: 'Same recipe, lighter portion — good for a solo lunch or pairing with extra raita.',
    image: 'https://images.unsplash.com/photo-1633945274405-b6c8069047b0?w=500&auto=format&fit=crop&q=80',
    whatsappText: 'I want to order Half Plate Biryani',
  },
  {
    id: 'kg-biryani',
    name: 'Biryani (1kg)',
    price: 800,
    tag: 'Available',
    spice: 3,
    desc: 'The full-batch option — enough for a family plate or a small gathering.',
    image: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=500&auto=format&fit=crop&q=80',
    whatsappText: 'I want to order 1kg Biryani',
  },
]

export const drinksMenu = [
  {
    id: 'pepsi',
    name: 'Pepsi',
    size: '1 Litre',
    price: 170,
    image: 'https://images.unsplash.com/photo-1629203851122-3726ecdf080e?w=500&auto=format&fit=crop&q=80',
    whatsappText: 'I want to order 1 Litre Pepsi',
  },
  {
    id: 'cola',
    name: 'Coca Cola',
    size: '1 Litre',
    price: 170,
    image: 'https://images.unsplash.com/photo-1554866585-cd94860890b7?w=500&auto=format&fit=crop&q=80',
    whatsappText: 'I want to order 1 Litre Coca Cola',
  },
  {
    id: 'sprite',
    name: 'Sprite',
    size: '1 Litre',
    price: 170,
    image: 'https://images.unsplash.com/photo-1625772299848-391b6a87d7b3?w=500&auto=format&fit=crop&q=80',
    whatsappText: 'I want to order 1 Litre Sprite',
  },
]

export const steps = [
  {
    n: '01',
    title: 'Call or WhatsApp',
    desc: 'Tell us what you want — biryani, drinks, or both. No app, no account, just a message.',
  },
  {
    n: '02',
    title: 'We cook it fresh',
    desc: 'Nothing sits under a heat lamp. Your order goes into the pot after you place it.',
  },
  {
    n: '03',
    title: 'Delivered free',
    desc: 'Straight to your door, no delivery fee added at checkout — anywhere we cover.',
  },
]
