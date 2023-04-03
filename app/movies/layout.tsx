
// export const metadata: Metadata = {
//   title: 'Simple Movie Catalog App',
//   description: 'Coding test Etapinsure',
// }

import SearchBox from "../search/page"
import MovieList from "./movieList"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <main className="flex">
      <div>
        {/* @ts-ignore */}
        <MovieList />
        </div>
      <div className="flex-1"> {children}</div>
    </main>
  )
}
