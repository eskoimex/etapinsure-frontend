import React from 'react'
import getAllMovies from '@/lib/getAllMovies'
import Link from 'next/link'
import MovieList from './movieList'

export default async function moviesPage() {
    return <div>

    <h1>Movie details will be listed here...</h1>
        {/* @ts-ignore */}  
         <MovieList /> 
</div>

//     const moviesData : Promise<Movie[]> = getAllMovies()
//     const movies = await moviesData
//     console.log("Hello")

//     const content = (
//         <section>
//             <h2>
//                 <Link href="/">Back to home</Link>
//             </h2>
//             <br />
//             {movies.map(movie => {
//                 return (
//                     <>
//                         <p key={movie.id}>
//                             <Link href={`/movies/${movie.id}`}>{movie.name}</Link>
//                         </p>
//                         <br />
//                     </>
//                 )
//             })}
//         </section>
//     )

//   return content
}
