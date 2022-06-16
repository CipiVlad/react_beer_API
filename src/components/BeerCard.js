import { Link } from 'react-router-dom'
const BeerCard = (props) => {
    console.log(props.id)
    return (
        <section className="BeerCard">
            <div className="BeerCardContainer">
                <img src={props.image} alt="" />
                <article>
                    <h2>{props.name}</h2>
                    <h3>{props.tagline}</h3>
                    <p>Created by: {props.createdBy}</p>
                    <Link to={`/item/${props.id}`} state={props.beer}>Details</Link>
                </article>
            </div>
        </section>
    )
}

export default BeerCard