import { HeroeList } from "../components/HeroeList"

export const DCPage = () => {
  return (
    <div className="container">
      <h1> DC Comics</h1>

      <HeroeList publisher='DC Comics' />
    </div>
  )
}
