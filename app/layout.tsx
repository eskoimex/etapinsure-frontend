import './globals.css'
import type {Metadata} from 'next'
import MoviePage from './movies/[movieId]/page'
import Header from './Header'
import Link from 'next/link'
import SearchBox from './search/page'

export const metadata: Metadata = {
  title: 'Simple Movie Catalog App',
  description: 'Coding test Etapinsure',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Header />
        <SearchBox />

        {/* <Link href="/addMovie">Add Movie</Link> */}
        <div className="max-w-6wl mx-auto">{children}</div>
      </body>
    </html>
  )
}
