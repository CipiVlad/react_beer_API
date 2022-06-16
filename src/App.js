import './App.css';
import { Routes, Route } from "react-router-dom";
import LandingPage from './pages/LandingPage';
import AllBeersPage from './pages/AllBeersPage';
import RandomBeer from './pages/RandomBeer';
import BeerDetailPage from './pages/BeerDetailPage';
import beerData from './beerData';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LandingPage />}></Route>
        <Route path="/allBeers" element={<AllBeersPage />}></Route>
        <Route path="/randomBeer" element={<RandomBeer />}></Route>
        <Route path="/item/:id" element={<BeerDetailPage />}></Route>
      </Routes >
    </div >
  );
}

export default App;
