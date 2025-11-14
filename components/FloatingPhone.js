export default function FloatingPhone() {
  return (
    <div className="fixed bottom-6 right-6 animate-bounce z-50">
      <div className="bg-red-600 text-white rounded-lg shadow-lg p-4 flex items-center space-x-3">
        <img src="/phone.png" alt="Promo Vodafone" className="w-12 h-12" />
        <div>
          <p className="font-bold">Promo Fibra + Mobile</p>
          <p className="text-sm">Chiama ora: 02 123456</p>
        </div>
      </div>
    </div>
  )
}
