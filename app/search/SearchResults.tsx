import React from 'react'
import getSearchResult from '@/lib/getSearchResult'
import Link from 'next/link'


type Params = {
    params: {
        searchTerm: string
    }
}

async function searchResults({ params: { searchTerm } }: Params)  {
console.log(searchTerm)
    const searchData : Promise<Movie[]> = getSearchResult(searchTerm)
    const searchResponse = await searchData
    console.log(searchResponse)

    const content = (
        <section>
                <p>You searched for: {searchTerm}</p>

            <br />
            {searchResponse.map(result => {
                return (
                    <>
                        <div key={result.id}>
                            <p>{result.description}</p>
                        </div>
                        <br />
                    </>
                )
            })}
        </section>
    )

  return content
}

export default searchResults