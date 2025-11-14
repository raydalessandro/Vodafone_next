export default function Negozi() {
  return (
    <div className="px-6 py-12">
      <h2 className="text-3xl font-bold text-red-600 mb-6">Trova i nostri negozi</h2>
      <p className="text-gray-700 mb-4">
        Vieni a trovarci nei nostri punti vendita Vodafone Brianza.
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700">
        <li>Monza – Via Italia 12</li>
        <li>Seregno – Corso del Popolo 45</li>
        <li>Desio – Piazza Garibaldi 3</li>
      </ul>

      <div className="mt-8">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2795.123456789!2d9.123456!3d45.583456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4786abcdef12345%3A0x123456abcdef!2sVodafone%20Store%20Monza!5e0!3m2!1sit!2sit!4v1700000000000"
          width="100%"
          height="400"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  )
}
