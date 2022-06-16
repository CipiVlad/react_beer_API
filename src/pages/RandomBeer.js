import { useState, useEffect } from 'react'
import Navbar from "../components/Navbar"
import backButton from "../backButton.svg"
import { Link } from "react-router-dom";

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
            <div>
                <section className="BeerDetailCard">

                    <img src={beer.image_url} alt="" />
                    <div className="DetailContainer">
                        <h3>{beer.name}</h3>
                        <h4>{beer.tagline}</h4>
                        <div>
                            <p>First brewed: {beer.first_brewed}</p>
                            <p>Attenuation Level: {beer.attenuation_level}</p>
                        </div>
                        <div>
                            <p>{beer.description}</p>
                            <Link to="/allBeers">  <img src={backButton} alt="" /></Link>
                        </div>
                    </div>
                </section>
                <Navbar />
            </div>
        </div>
    )
}

export default RandomBeer