import { Link } from "react-router-dom"
const LandingPage = () => {
    return (
        <header>
            <nav>
                <ul>
                    <li className="beers_li">
                        <img className="beers_img" src="https://images.unsplash.com/photo-1505075106905-fb052892c116?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" alt="" />
                        <Link to="/allBeers"><p className="beers_link">All Beers</p></Link>
                        <p>“He was a wise man who invented beer”</p>
                    </li>
                    <li className="beers_li">
                        <img className="beers_img" src="https://images.unsplash.com/photo-1612528443702-f6741f70a049?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80" alt="" />
                        <Link to="/randomBeer"><p className="beers_link">Random Beer</p></Link>
                        <p>“Give me a woman who loves beer and I will conquer the world.”</p>
                    </li>
                </ul>
            </nav>
        </header>
    )
}
export default LandingPage
