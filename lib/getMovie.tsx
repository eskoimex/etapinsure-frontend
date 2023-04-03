export default async function getMovie(movieId: string) {
    // const res = await fetch(`https://jsonplaceholder.typicode.com/users/${movieId}`)
    const res = await fetch(`http://localhost:3001/api/v1/movie/${movieId}`,{
        method: "get",
        headers: {
          "content-type": "application/x-www-form-urlencoded",
        },
    })

     if (!res.ok) throw new Error('failed to fetch movie')

    return res.json()
}