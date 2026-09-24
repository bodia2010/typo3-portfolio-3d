import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Ihor Bondarenko | Senior TYPO3 Developer',
  description: 'Portfolio with Draftly-style 3D animations',
}

export default function RootLayout({ children }: { children: React.ReactNode }): JSX.Element {
  return (
    <html lang="en" className="bg-dark text-white">
      <body className="bg-[#0A192F] min-h-screen">
        {children}
      </body>
    </html>
  )
}
