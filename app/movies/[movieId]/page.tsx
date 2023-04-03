


import getMovie from "@/lib/getMovie"
import { Suspense } from "react"
import type { Metadata } from 'next'
import {notFound} from "next/navigation"

type Params = {
    params: {
        movieId: string
    }
}

export async function generateMetadata({ params: { movieId } }: Params): Promise<Metadata> {
    const movieData: Promise<Movie> = getMovie(movieId)
    const movie: Movie = await movieData
//    console.log(`movie -  ${movie.name}`)
    return {
        title: movie.title,
        description: `This is the page of ${movie.title}`
    }

}

export default async function MoviePage({ params: { movieId } }: Params) {
    const movieData: Promise<Movie> = getMovie(movieId)
    const movie = await movieData

    if(!movie.id) return notFound();
    
    return (
        <div className="p-10 bg-white-200 border-2 m-12 shadow-lg">  
       

          <h2>Title : {movie.title}</h2>
          <h2>Genre : {movie.genre}</h2>
          <h2>Description : {movie.description}</h2>
        
        </div>
    )
}
