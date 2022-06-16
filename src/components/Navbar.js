import { Link } from "react-router-dom"
import beerLogo from "../BeerLogo.svg"
const Navbar = () => {
    return (
        <div className="Beer Logo">
            <Link to="/">
                <img src={beerLogo} alt="" />
            </Link>
        </div>
    )
}

export default Navbar