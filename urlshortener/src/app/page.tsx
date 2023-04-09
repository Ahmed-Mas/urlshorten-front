import Image from 'next/image'
import { Inter } from 'next/font/google'
import UrlShortenerComponent from "./components/urlshortener"

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between p-24">
      <div className="p-10">
        <h1 className="text-2xl">Url Shortener</h1>
      </div>
      <div>
        <UrlShortenerComponent/>
      </div>
    </main>
  )
}
