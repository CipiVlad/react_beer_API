import { Link } from "react-router-dom"
const LandingPage = () => {
    return (
        <header>
            <nav>
                <ul>
                    <li>
                        <img src="https://images.unsplash.com/photo-1505075106905-fb052892c116?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" alt="" />
                        <Link to="/allBeers">All Beers</Link>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt</p>
                    </li>
                    <li>
                        <img src="https://images.unsplash.com/photo-1612528443702-f6741f70a049?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80" alt="" />
                        <Link to="/randomBeer">Random Beer</Link>
                        <p>Rerum sequi facilis quia eaque quas est maxime maiores totam illum nisi porro natus molestias nobis, veritatis velit incidunt asperiores! Hic, incidunt?</p>
                    </li>
                </ul>
            </nav>
        </header>
    )
}
export default LandingPage
