import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Ihor Bondarenko | Senior TYPO3 Developer',
  description: 'Portfolio with Draftly-style 3D animations',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="bg-dark text-white">
      <body className="bg-[#020C1B] min-h-screen">
        {children}
      </body>
    </html>
  )
}
