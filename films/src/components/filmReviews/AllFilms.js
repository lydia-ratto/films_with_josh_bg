import React from "react"
import UseFilmList from "../hooks/useFilmList";
import { FilmListContextProvider } from "../context/FilmListContext";
import AllFilmsContent from '../filmReviews/AllFilmsContent'

function AllFilms() {
  return (
    <FilmListContextProvider>
      <UseFilmList>
        <AllFilmsContent />
      </UseFilmList>
    </FilmListContextProvider>
  )
}

export default AllFilms;
