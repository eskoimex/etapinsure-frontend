
export default async function getSearchResult(searchTerm: string) {
    const res = await fetch(`http://localhost:3001/api/v1/movie?searchTerm=${searchTerm}`,{
    method: "get",
    headers: {
      "content-type": "application/x-www-form-urlencoded",
    },

})

   if(!res.ok) throw new Error('Failed to fetch data')
    
    return res.json()
}
