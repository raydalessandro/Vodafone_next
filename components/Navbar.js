export default function Navbar() {
  return (
    <nav className="bg-red-600 text-white px-6 py-4 flex justify-between items-center sticky top-0 z-50">
      <h1 className="font-bold text-xl">Vodafone Brianza</h1>
      <div className="space-x-4">
        <a href="/privati" className="hover:underline">Privati</a>
        <a href="/business" className="hover:underline">Business</a>
        <a href="/servizi" className="hover:underline">Servizi</a>
        <a href="/smartphone" className="hover:underline">Smartphone</a>
        <a href="/negozi" className="hover:underline">Trova Negozio</a>
      </div>
    </nav>
  )
}
