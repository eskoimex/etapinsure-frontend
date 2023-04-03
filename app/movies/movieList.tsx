import React from 'react'
import getAllMovies from '@/lib/getAllMovies'
import Link from 'next/link'

async function movieList() {

    const moviesData : Promise<Movie[]> = getAllMovies()
    const movies = await moviesData
    console.log("movies", movies)

    const content = (
        <section>
                 <br />
            <div  className="pl-20">   
                <h1 className="font-bold text-2xl " >Movie List</h1>

            <br />
            {movies.map(movie => {
                return (
                    <> 
                        <p key={movie.id}>
                            <Link href={`/movies/${movie.id}`}>
                            {movie.id}. {movie.title}
                            </Link>
                        </p>
                    </>
                )
            })}
            </div>  
        </section>
    )

  return content
}

export default movieList