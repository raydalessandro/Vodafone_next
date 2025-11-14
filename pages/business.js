import OfferCard from '../components/OfferCard'

export default function Business() {
  return (
    <div className="px-6 py-12">
      <h2 className="text-3xl font-bold text-red-600 mb-6">Offerte Business</h2>
      <div className="grid md:grid-cols-2 gap-6">
        <OfferCard title="Business Fibra" price="39,90€/mese" description="Connessione dedicata per la tua azienda." />
        <OfferCard title="Business Mobile" price="24,90€/mese" description="Piani telefonici su misura per il tuo team." />
      </div>
    </div>
  )
}
