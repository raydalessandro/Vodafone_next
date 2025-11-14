export default function Smartphone() {
  return (
    <div className="px-6 py-12">
      <h2 className="text-3xl font-bold text-red-600 mb-6">Smartphone Top</h2>
      <p className="text-gray-700">Scopri i migliori smartphone disponibili con le nostre offerte.</p>
      <div className="grid md:grid-cols-3 gap-6 mt-6">
        <div className="bg-white shadow-md p-4 rounded">
          <h3 className="font-bold">iPhone 15</h3>
          <p>Disponibile con rate mensili.</p>
        </div>
        <div className="bg-white shadow-md p-4 rounded">
          <h3 className="font-bold">Samsung Galaxy S24</h3>
          <p>Offerta esclusiva Vodafone.</p>
        </div>
        <div className="bg-white shadow-md p-4 rounded">
          <h3 className="font-bold">Xiaomi 14</h3>
          <p>Prezzo competitivo e prestazioni top.</p>
        </div>
      </div>
    </div>
  )
}
