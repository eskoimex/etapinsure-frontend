"use server"

import React from 'react'  
import SearchResults from '../SearchResults'

type PageProps = {
    params: {
        searchTerm: string;
    }
}

type SearchResult = {
    "id": string,
    "title": string
    "genre": string,
    "description": string,
}


const search = async (searchTerm: string) => {


    const res = await fetch(`http://localhost:3001/api/v1/movie?searchTerm=${searchTerm}`,{
        method: "get",
        headers: {
          "content-type": "application/x-www-form-urlencoded",
        },
    
    })
    
       if(!res.ok) throw new Error('Failed to fetch data')
        
        return await res.json()
       

    
}

async function searchResults({params: {searchTerm}} : PageProps) {
   const searchResults = await search(searchTerm) 
   console.log("searchResults", typeof(searchResults))

   const content = (
    <section className="w-full flex-1 h-screen  justify-center  ">
      <p className='text-bold'>You searched for: {searchTerm} </p>
      
      {searchResults.map((result: SearchResult) => {
                return (
                    <>
                        <div key={result.id} >
                            <p >{result.description}</p>
                        </div>
                        <br />
                    </>
                )
            })}

    </section>
)

return content

}

export default searchResults;

