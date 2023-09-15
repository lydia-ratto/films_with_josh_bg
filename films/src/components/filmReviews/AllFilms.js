import React from "react"
import UseFilmList from "../hooks/useFilmList";
import { FilmListContextProvider } from "../context/FilmListContext";
import AllFilmsContent from '../filmReviews/AllFilmsContent'
import DownloadButton from "../sections/DownloadButton";

function AllFilms() {
  return (
    <FilmListContextProvider>
      <UseFilmList>
        <DownloadButton />
        <AllFilmsContent />
      </UseFilmList>
    </FilmListContextProvider>
  )
}

export default AllFilms;
