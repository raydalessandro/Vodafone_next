Vodafone-Clo Next.js

Sito web modernizzato con Next.js + TailwindCSS, pronto per il deploy su Vercel.

🚀 Setup

1. Clona il repo:
   `bash
   git clone https://github.com/<tuo-username>/<repo>.git
   cd <repo>
   `

2. Installa dipendenze:
   `bash
   npm install
   `

3. Avvia in locale:
   `bash
   npm run dev
   `

4. Deploy su Vercel:
   - Accedi su vercel.com
   - Importa il repo GitHub
   - Vercel builda automaticamente con npm run build

📂 Struttura
- components/ → componenti riutilizzabili (Navbar, Hero, Card, ecc.)
- pages/ → routing automatico Next.js
- public/ → immagini statiche (telefono fluttuante)
- styles/ → Tailwind + CSS globali
