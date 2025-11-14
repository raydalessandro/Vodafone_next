import OfferCard from '../components/OfferCard'

export default function Privati() {
  return (
    <div className="px-6 py-12">
      <h2 className="text-3xl font-bold text-red-600 mb-6">Offerte Privati</h2>
      <div className="grid md:grid-cols-2 gap-6">
        <OfferCard title="Fibra Casa" price="29,90€/mese" description="Internet veloce e stabile per tutta la famiglia." />
        <OfferCard title="Mobile 5G" price="14,90€/mese" description="Naviga e chiama senza pensieri." />
      </div>
    </div>
  )
}
