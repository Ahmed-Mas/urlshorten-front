import './globals.css'

export const metadata = {
  title: 'URL Shortener',
  description: 'Generate short URLs',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
