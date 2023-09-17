import React from "react";
import AllFilms from "../filmReviews/AllFilms";
import Search from "../sections/Search";
import { Link } from "react-router-dom";

function AllFilmsPage() {
  return (
    <div>
      <Link to="/films/add">Add new film review</Link>
      <Search />
      <AllFilms />
    </div>
  )
}

export default AllFilmsPage;
