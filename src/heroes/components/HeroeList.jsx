import { heroes } from '../data/heroes';
import { getHeroesByPublisher } from '../helpers'

export const HeroeList = ({ publisher }) => {

    const heroes = getHeroesByPublisher(publisher);

    return (
        <ul>
            {
                heroes.map(hero => (
                    <li key={hero.key}>{hero.superhero}</li>
                ))
            }
        </ul>
    )
}
