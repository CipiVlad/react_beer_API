import BeerList from "../components/BeerList"
import Navbar from "../components/Navbar"

const AllBeersPage = () => {
    return (
        <div className="AllBeersContainer">
            <BeerList />
            <Navbar />
        </div>
    )
}

export default AllBeersPage