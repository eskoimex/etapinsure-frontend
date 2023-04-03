import Link from 'next/link'
import React from 'react'

export default function Header() {
  return <header className="p-5 bg-gray-500">
    <Link href="/" className="font-bold text-white text-4xl"><h2>Simple Movie Catalog</h2></Link>
    <div>        
      <Link href="/addMovie" className="text-white">Add Movie</Link>
    </div>
    </header>
  
}
