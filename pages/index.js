import Hero from '../components/Hero'
import OfferCard from '../components/OfferCard'
import FloatingPhone from '../components/FloatingPhone'

export default function Home() {
  return (
    <div>
      <Hero />
      <section className="grid md:grid-cols-3 gap-6 px-6 py-12">
        <OfferCard title="Fibra 1Gbps" price="29,90€/mese" description="Connessione ultraveloce per la tua casa." />
        <OfferCard title="5G Unlimited" price="19,90€/mese" description="Naviga senza limiti con il 5G." />
        <OfferCard title="Business Pack" price="39,90€/mese" description="Soluzioni su misura per aziende." />
      </section>
      <FloatingPhone />
    </div>
  )
}
