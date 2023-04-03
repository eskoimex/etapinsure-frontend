
export default async function getAllMovies() {
    const res = await fetch('http://localhost:3001/api/v1/movies',{
    method: "get",
    headers: {
      "content-type": "application/json",
    },
})

   if(!res.ok) throw new Error('Failed to fetch data')
    
    return res.json()
}
