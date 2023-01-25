import { Link } from "react-router-dom";
export const HeroeCard = ({
  id,
  superhero,
  publisher,
  alter_ego,
  first_appearance,
  characters
}) => {

  const imageUrl = `/assets/${id}.jpg`;

  return (
    <div className="items">
      <div className="item__img">
        <img src={imageUrl} alt="" />
      </div>
      <div className="item__content">
        <h1>{superhero}</h1>
        <p>{alter_ego}</p>

        <Link to={`/hero/${id}`}>
          Ver detalle
        </Link>
      </div>
    </div>
  )
}
