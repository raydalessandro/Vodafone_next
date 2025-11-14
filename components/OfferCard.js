export default function OfferCard({ title, price, description }) {
  return (
    <div className="bg-white shadow-md rounded-lg p-6 text-center">
      <h3 className="text-xl font-bold text-red-600">{title}</h3>
      <p className="text-2xl font-semibold my-2">{price}</p>
      <p className="text-gray-600 mb-4">{description}</p>
      <button className="bg-red-600 text-white px-4 py-2 rounded">Attiva Ora</button>
    </div>
  )
}
