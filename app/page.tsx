import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from './page.module.css'
import Link from 'next/link'
import MovieList from './movies/movieList'
import SearchBox from './search/page'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main>
        {/* @ts-ignore */}  
        <MovieList />
    </main>
  )
}
