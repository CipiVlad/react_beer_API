import Navbar from "../components/Navbar";
import { useParams, useLocation } from "react-router-dom";

const BeerDetailPage = () => {
    //id ziehen von BeerCard
    let { id } = useParams();

    //Daten für Ausgabe ziehen
    const location = useLocation();
    let data = location.state;

    // console.log(id);
    // console.log(data);

    //einzelnes Objekt rausfiltern
    let detail = data.filter((elt) => {
        console.log(elt._id);
        return elt._id === id;
    })
    console.log(detail);

    //Ausgabe im display
    return (
        <div>
            <section>
                <article>
                    <img src={detail[0].image_url} alt="" />
                    <h3>{detail[0].name}</h3>
                    <p>{detail[0].tagline}</p>
                </article>
                <div>
                    <p>{detail[0].first_brewed}</p>
                    <p>{detail[0].attenuation_level}</p>
                </div>
                <div>
                    <p>{detail[0].description}</p>
                    <p>{detail[0].contributed_by}</p>
                </div>
            </section>
            <Navbar />
        </div>
    )
}

export default BeerDetailPage