import { HeroeList } from "../components/HeroeList"

export const MarvelPage = () => {
  return (
    <div className="container">
      <h1> DC Comics</h1>

      <HeroeList publisher='Marvel Comics' />
    </div>
  )
}
