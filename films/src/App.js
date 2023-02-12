import './css/App.css';
import AllFilms from "./filmReviews/AllFilms";
import Hero from "./sections/Hero"
import Navbar from "./sections/Navbar"
import Search from "./sections/Search"



function App() {
  return (
    <div className="App" style={{backgroundColor: '#F7D9AE'}}>
      <Navbar />
      <Hero />
      <Search />
      <AllFilms />
    </div>
  );
}

export default App;
