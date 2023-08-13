import React from "react";
import Hero from "../sections/Hero";
import Navbar from "../sections/Navbar";
import Search from "../sections/Search";
import AllFilms from "../filmReviews/AllFilms";

function HomePage() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Search />
      <AllFilms />
    </div>
  )
}

export default HomePage;
