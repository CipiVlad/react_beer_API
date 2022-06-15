import { useState, useEffect } from 'react';
import beerData from '../beerData';
import BeerCard from './BeerCard';

const BeerList = () => {
    const [beer, setBeer] = useState(beerData);
    useEffect(() => {
        setBeer(beerData);
    }, [])
    return (
        <div className="BeerListCards">
            {beer.map((elt) =>
                <BeerCard
                    key={elt._id}
                    id={elt._id}
                    image={elt.image_url}
                    name={elt.name}
                    tagline={elt.tagline}
                    createdBy={elt.name}
                    beer={beer}
                />
            )}
        </div>
    )
}

export default BeerList