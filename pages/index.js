import FloatingPhone from '../components/FloatingPhone'

export default function Home() {
  return (
    <div>
      {/* Hero principale */}
      <section className="bg-gradient-to-r from-red-600 to-red-400 text-white text-center py-20">
        <h1 className="text-4xl font-bold mb-4">Oak – Rivenditore Autorizzato Vodafone</h1>
        <p className="mb-6">3 negozi in Brianza • Assistenza diretta • 2000+ clienti business</p>
        <div className="space-x-4">
          <a href="/privati" className="bg-white text-red-600 px-4 py-2 rounded font-semibold">Scopri le Offerte</a>
          <a href="https://wa.me/393398765432?text=Ciao!%20Vorrei%20un%20preventivo%20Vodafone." className="bg-green-500 px-4 py-2 rounded font-semibold">WhatsApp</a>
          <a href="/negozi" className="bg-black px-4 py-2 rounded font-semibold">Trova Negozio</a>
        </div>
      </section>

      {/* Sezione vantaggi */}
      <section className="px-6 py-12 grid md:grid-cols-3 gap-6 text-center">
        <div>
          <h3 className="text-xl font-bold text-red-600">Attivazione IMMEDIATA</h3>
          <p>SIM e Fibra attive subito. Online aspetti giorni.</p>
        </div>
        <div>
          <h3 className="text-xl font-bold text-red-600">Assistenza UMANA</h3>
          <p>Marco risponde su WhatsApp. Non un bot.</p>
        </div>
        <div>
          <h3 className="text-xl font-bold text-red-600">Risolviamo CASINI</h3>
          <p>Portabilità bloccata? Fatture sbagliate? Ci pensiamo noi.</p>
        </div>
      </section>

      {/* Recensioni */}
      <section className="bg-gray-100 px-6 py-12">
        <h2 className="text-3xl font-bold text-red-600 mb-6">Oltre 1.000 Recensioni dai Nostri Clienti</h2>
        <p className="mb-4">Professionalità, trasparenza e assistenza che fanno la differenza.</p>
        <div className="space-y-4">
          <blockquote className="bg-white p-4 rounded shadow">“Grazie alla signorina Valeria dell’aiuto. Contratto business super vantaggioso.” – Franci</blockquote>
          <blockquote className="bg-white p-4 rounded shadow">“Professionalità e gentilezza dei ragazzi in negozio.” – Saverio</blockquote>
          <blockquote className="bg-white p-4 rounded shadow">“Operatori gentili e disponibili al Gigante di Villasanta.” – Mattia</blockquote>
        </div>
      </section>

      {/* Offerte principali */}
      <section className="px-6 py-12 grid md:grid-cols-3 gap-6">
        <div className="bg-white shadow rounded p-6">
          <h3 className="text-xl font-bold text-red-600">Fibra 2.5Gb + Mobile Unlimited</h3>
          <p className="text-2xl font-semibold">€39,90/mese</p>
          <p>+ iPhone 15 a €19/mese invece di €29</p>
          <a href="https://wa.me/393398765432" className="block mt-4 bg-red-600 text-white px-4 py-2 rounded">Attiva Ora</a>
        </div>
        <div className="bg-white shadow rounded p-6">
          <h3 className="text-xl font-bold text-red-600">5G Unlimited</h3>
          <p className="text-2xl font-semibold">€19,99/mese</p>
          <p>Giga, minuti e SMS illimitati • Hotspot incluso</p>
          <a href="/contatti" className="block mt-4 bg-red-600 text-white px-4 py-2 rounded">Richiedi info</a>
        </div>
        <div className="bg-white shadow rounded p-6">
          <h3 className="text-xl font-bold text-red-600">Business One</h3>
          <p className="text-2xl font-semibold">da €29,90/mese</p>
          <p>Linea dedicata • IP statico • Centralino virtuale</p>
          <a href="/business" className="block mt-4 bg-red-600 text-white px-4 py-2 rounded">Consulenza</a>
        </div>
      </section>

      {/* Servizi e link rapidi */}
      <section className="bg-gray-50 px-6 py-12 grid md:grid-cols-2 gap-6">
        <div>
          <h3 className="text-2xl font-bold text-red-600 mb-4">Privati & Famiglia</h3>
          <p>Offerte mobile personalizzate, fibra casa ultraveloce e smartphone top.</p>
          <a href="/privati" className="text-red-600 font-semibold">Scopri le offerte →</a>
        </div>
        <div>
          <h3 className="text-2xl font-bold text-red-600 mb-4">Business & P.IVA</h3>
          <p>Connettività dedicata, centralini, IP statico e assistenza prioritaria.</p>
          <a href="/business" className="text-red-600 font-semibold">Soluzioni su misura →</a>
        </div>
      </section>

      {/* Telefono fluttuante */}
      <FloatingPhone />
    </div>
  )
        }
