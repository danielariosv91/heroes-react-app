import { HeroeCard } from './'
import { getHeroesByPublisher } from '../helpers'

export const HeroeList = ({ publisher }) => {

    const heroes = getHeroesByPublisher(publisher);

    return (
        <div className="container__items">
            {
                heroes.map(hero => (
                    <HeroeCard 
                    key={hero.id}
                    { ...hero}/>
                ))
            }
        </div>
    )
}
