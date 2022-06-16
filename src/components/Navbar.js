import { Link } from "react-router-dom"
import beerLogo from "../BeerLogo.svg"
const Navbar = () => {
    return (
        <div className="BeerLogo">
            <Link to="/">
                <img src={beerLogo} alt="" />
            </Link>
        </div>
    )
}

export default Navbar