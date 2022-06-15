import { useState, useEffect } from 'react'
import Navbar from "../components/Navbar"

const RandomBeer = () => {
    const [beer, setBeer] = useState([]);
    useEffect(() => {
        fetch("https://ih-beers-api2.herokuapp.com/beers/random")
            .then((res) => res.json())
            .then((json) => setBeer(json));
    }, []);
    console.log(beer);
    return (
        <div>
            <h1>Random Beer</h1>
            <div>
                <section>
                    <article>
                        <img src={beer.image_url} alt="" />
                        <h3>{beer.name}</h3>
                        {/* <p>{detail[0].tagline}</p> */}
                    </article>
                    <div>
                        <p>{beer.first_brewed}</p>
                        <p>{beer.attenuation_level}</p>
                    </div>
                    <div>
                        <p>{beer.description}</p>
                        <p>{beer.contributed_by}</p>
                    </div>
                </section>
                <Navbar />
            </div>
        </div>
    )
}

export default RandomBeer