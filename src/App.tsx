import { useState } from 'react'

const menuItems = [
  { name: 'Espresso', price: '$3.50', desc: 'Rich, bold single shot pulled to perfection.' },
  { name: 'Cappuccino', price: '$4.50', desc: 'Silky microfoam layered over a double shot.' },
  { name: 'Caramel Latte', price: '$5.25', desc: 'Smooth espresso, steamed milk & house caramel.' },
  { name: 'Cold Brew', price: '$4.75', desc: '24-hour steep, served over hand-cut ice.' },
  { name: 'Flat White', price: '$4.50', desc: 'Double ristretto with velvety microfoam.' },
  { name: 'Matcha Latte', price: '$5.00', desc: 'Ceremonial-grade matcha with oat milk.' },
] satisfies { name: string; price: string; desc: string }[]

const testimonials = [
  { name: 'Sarah M.', text: 'The best espresso in town — Zaki\'s is my morning ritual!', stars: 5 },
  { name: 'James R.', text: 'Cozy atmosphere, incredible cold brew. I come every single day.', stars: 5 },
  { name: 'Lena T.', text: 'The caramel latte changed my life. No exaggeration.', stars: 5 },
]

export function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <div className="font-sans bg-[#1a0e08] text-[#f5ede0] min-h-screen overflow-x-hidden">

      {/* NAV */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#1a0e08]/90 backdrop-blur border-b border-[#3d2b1f]">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <a href="#home" className="flex items-center gap-2 group">
            <span className="text-3xl">☕</span>
            <span className="text-2xl font-bold tracking-tight text-[#d4a55a]" style={{fontFamily:'Playfair Display, serif'}}>
              Zaki&apos;s
            </span>
          </a>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-[#c8a97e]">
            <a href="#about" className="hover:text-[#d4a55a] transition-colors">About</a>
            <a href="#menu" className="hover:text-[#d4a55a] transition-colors">Menu</a>
            <a href="#testimonials" className="hover:text-[#d4a55a] transition-colors">Reviews</a>
            <a href="#contact" className="hover:text-[#d4a55a] transition-colors">Find Us</a>
            <a href="#contact" className="bg-[#d4a55a] text-[#1a0e08] font-semibold px-5 py-2 rounded-full hover:bg-[#c49348] transition-colors">
              Order Now
            </a>
          </div>
          <button
            className="md:hidden text-[#d4a55a]"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? '✕' : '☰'}
          </button>
        </div>
        {mobileMenuOpen && (
          <div className="md:hidden bg-[#1a0e08] px-6 pb-4 flex flex-col gap-4 text-[#c8a97e] text-sm font-medium border-t border-[#3d2b1f]">
            {['about','menu','testimonials','contact'].map(id => (
              <a key={id} href={`#${id}`} onClick={() => setMobileMenuOpen(false)} className="hover:text-[#d4a55a] capitalize transition-colors">
                {id === 'testimonials' ? 'Reviews' : id === 'contact' ? 'Find Us' : id}
              </a>
            ))}
          </div>
        )}
      </nav>

      {/* HERO */}
      <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#1a0e08] via-[#2c1810] to-[#1a0e08]" />
        {/* Decorative circles */}
        <div className="absolute top-20 right-10 w-80 h-80 rounded-full bg-[#d4a55a]/5 blur-3xl" />
        <div className="absolute bottom-20 left-10 w-96 h-96 rounded-full bg-[#d4a55a]/5 blur-3xl" />

        <div className="relative text-center px-6 max-w-4xl mx-auto pt-24">
          <div className="inline-block bg-[#d4a55a]/10 text-[#d4a55a] text-xs font-semibold tracking-widest uppercase px-4 py-2 rounded-full border border-[#d4a55a]/30 mb-8">
            ☕ Est. 2018 · Premium Coffee
          </div>
          <h1 className="text-6xl md:text-8xl font-black text-white mb-6 leading-none" style={{fontFamily:'Playfair Display, serif'}}>
            Crafted with<br />
            <span className="text-[#d4a55a]">Passion</span>
          </h1>
          <p className="text-[#c8a97e] text-xl md:text-2xl max-w-2xl mx-auto mb-10 leading-relaxed">
            Every cup at Zaki&apos;s is a story — sourced from small farms, roasted in-house, served with love.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#menu" className="bg-[#d4a55a] text-[#1a0e08] font-bold px-8 py-4 rounded-full hover:bg-[#c49348] transition-colors text-lg shadow-lg shadow-[#d4a55a]/20">
              Explore Menu
            </a>
            <a href="#about" className="border border-[#d4a55a]/40 text-[#d4a55a] font-semibold px-8 py-4 rounded-full hover:bg-[#d4a55a]/10 transition-colors text-lg">
              Our Story
            </a>
          </div>
          {/* Stats */}
          <div className="mt-20 grid grid-cols-3 gap-8 max-w-xl mx-auto">
            {[['500+', 'Daily Cups'], ['6', 'Years Roasting'], ['4.9★', 'Avg Rating']].map(([num, label]) => (
              <div key={label} className="text-center">
                <div className="text-3xl font-black text-[#d4a55a]" style={{fontFamily:'Playfair Display, serif'}}>{num}</div>
                <div className="text-xs text-[#c8a97e] mt-1 font-medium">{label}</div>
              </div>
            ))}
          </div>
        </div>
        {/* Scroll cue */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-[#d4a55a]/40 text-2xl animate-bounce">↓</div>
      </section>

      {/* ABOUT */}
      <section id="about" className="py-24 bg-[#120a05]">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          <div>
            <div className="text-[#d4a55a] text-xs font-semibold tracking-widest uppercase mb-4">Our Story</div>
            <h2 className="text-5xl font-black text-white mb-6" style={{fontFamily:'Playfair Display, serif'}}>
              More than just<br />a cup of coffee
            </h2>
            <p className="text-[#c8a97e] text-lg leading-relaxed mb-6">
              Zaki&apos;s started with a simple belief: great coffee shouldn&apos;t be complicated. We source beans from ethical farms across Ethiopia, Colombia, and Guatemala, roasting small batches in-house every week.
            </p>
            <p className="text-[#c8a97e] text-lg leading-relaxed mb-10">
              Our baristas are trained to pull the perfect shot every time — not because we have to, but because we genuinely love what we do.
            </p>
            <div className="grid grid-cols-2 gap-6">
              {[
                { icon: '🌱', title: 'Ethically Sourced', desc: 'Direct trade with 12 farms' },
                { icon: '🔥', title: 'In-House Roasted', desc: 'Fresh every week' },
                { icon: '♻️', title: 'Eco Packaging', desc: '100% compostable cups' },
                { icon: '❤️', title: 'Community First', desc: 'Local events & pop-ups' },
              ].map(item => (
                <div key={item.title} className="bg-[#1a0e08] rounded-2xl p-5 border border-[#3d2b1f]">
                  <div className="text-2xl mb-2">{item.icon}</div>
                  <div className="text-white font-semibold text-sm">{item.title}</div>
                  <div className="text-[#c8a97e] text-xs mt-1">{item.desc}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <div className="rounded-3xl overflow-hidden bg-gradient-to-br from-[#3d2b1f] to-[#2c1810] h-48 flex items-center justify-center text-6xl">☕</div>
              <div className="rounded-3xl overflow-hidden bg-gradient-to-br from-[#4a3520] to-[#3d2b1f] h-32 flex items-center justify-center text-4xl">🫘</div>
            </div>
            <div className="space-y-4 pt-8">
              <div className="rounded-3xl overflow-hidden bg-gradient-to-br from-[#3d2b1f] to-[#1a0e08] h-32 flex items-center justify-center text-4xl">🌿</div>
              <div className="rounded-3xl overflow-hidden bg-gradient-to-br from-[#2c1810] to-[#3d2b1f] h-48 flex items-center justify-center text-6xl">🍵</div>
            </div>
          </div>
        </div>
      </section>

      {/* MENU */}
      <section id="menu" className="py-24 bg-[#1a0e08]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="text-[#d4a55a] text-xs font-semibold tracking-widest uppercase mb-4">What We Brew</div>
            <h2 className="text-5xl font-black text-white" style={{fontFamily:'Playfair Display, serif'}}>Our Signature Menu</h2>
            <p className="text-[#c8a97e] mt-4 text-lg max-w-xl mx-auto">From bold espressos to silky lattes — there&apos;s something for every palate.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {menuItems.map(item => (
              <div key={item.name} className="group bg-[#120a05] rounded-3xl p-7 border border-[#3d2b1f] hover:border-[#d4a55a]/50 transition-all hover:-translate-y-1 cursor-pointer">
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-xl font-bold text-white group-hover:text-[#d4a55a] transition-colors" style={{fontFamily:'Playfair Display, serif'}}>{item.name}</h3>
                  <span className="text-[#d4a55a] font-bold text-lg">{item.price}</span>
                </div>
                <p className="text-[#c8a97e] text-sm leading-relaxed">{item.desc}</p>
                <button className="mt-5 text-xs font-semibold text-[#d4a55a] border border-[#d4a55a]/30 px-4 py-2 rounded-full hover:bg-[#d4a55a] hover:text-[#1a0e08] transition-all">
                  Add to Order
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section id="testimonials" className="py-24 bg-[#120a05]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="text-[#d4a55a] text-xs font-semibold tracking-widest uppercase mb-4">Happy Customers</div>
            <h2 className="text-5xl font-black text-white" style={{fontFamily:'Playfair Display, serif'}}>What People Say</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map(t => (
              <div key={t.name} className="bg-[#1a0e08] rounded-3xl p-8 border border-[#3d2b1f]">
                <div className="text-[#d4a55a] text-xl mb-4">{'★'.repeat(t.stars)}</div>
                <p className="text-[#f5ede0] text-lg leading-relaxed mb-6 italic">&ldquo;{t.text}&rdquo;</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#d4a55a] to-[#c49348] flex items-center justify-center text-[#1a0e08] font-bold text-sm">
                    {t.name[0]}
                  </div>
                  <span className="text-[#c8a97e] font-medium">{t.name}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT / FIND US */}
      <section id="contact" className="py-24 bg-[#1a0e08]">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          <div>
            <div className="text-[#d4a55a] text-xs font-semibold tracking-widest uppercase mb-4">Visit Us</div>
            <h2 className="text-5xl font-black text-white mb-8" style={{fontFamily:'Playfair Display, serif'}}>Come Say Hello</h2>
            <div className="space-y-6">
              {[
                { icon: '📍', label: 'Address', value: '42 Brew Street, Coffee Quarter, NY 10001' },
                { icon: '🕗', label: 'Hours', value: 'Mon–Fri: 7am–8pm  ·  Sat–Sun: 8am–9pm' },
                { icon: '📞', label: 'Phone', value: '+1 (212) 555-0188' },
                { icon: '✉️', label: 'Email', value: 'hello@zakiscoffee.com' },
              ].map(item => (
                <div key={item.label} className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-[#d4a55a]/10 border border-[#d4a55a]/20 flex items-center justify-center text-xl flex-shrink-0">{item.icon}</div>
                  <div>
                    <div className="text-xs text-[#c8a97e] uppercase tracking-wider font-semibold">{item.label}</div>
                    <div className="text-white mt-1">{item.value}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          {/* CTA card */}
          <div className="bg-gradient-to-br from-[#d4a55a] to-[#c49348] rounded-3xl p-10 text-[#1a0e08]">
            <h3 className="text-3xl font-black mb-4" style={{fontFamily:'Playfair Display, serif'}}>Ready to Order?</h3>
            <p className="text-[#3d2b1f] mb-8 text-lg">Skip the queue — order ahead and pick up in 5 minutes.</p>
            <a href="mailto:hello@zakiscoffee.com" className="block w-full bg-[#1a0e08] text-[#d4a55a] font-bold py-4 rounded-2xl text-center hover:bg-[#2c1810] transition-colors text-lg">
              Order Ahead →
            </a>
            <div className="mt-6 pt-6 border-t border-[#1a0e08]/20 flex gap-4">
              {['Instagram', 'TikTok', 'Google Maps'].map(s => (
                <span key={s} className="text-xs font-semibold text-[#3d2b1f] underline cursor-pointer">{s}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#0d0703] py-10 border-t border-[#3d2b1f]">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="text-2xl">☕</span>
            <span className="text-xl font-bold text-[#d4a55a]" style={{fontFamily:'Playfair Display, serif'}}>Zaki&apos;s Coffee</span>
          </div>
          <p className="text-[#c8a97e] text-sm">© 2026 Zaki&apos;s Coffee. Brewed with ❤️ in New York.</p>
          <div className="flex gap-6 text-[#c8a97e] text-sm">
            <a href="#about" className="hover:text-[#d4a55a] transition-colors">About</a>
            <a href="#menu" className="hover:text-[#d4a55a] transition-colors">Menu</a>
            <a href="#contact" className="hover:text-[#d4a55a] transition-colors">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  )
}
