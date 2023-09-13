import React from "react";
import { FilmContextProvider } from "../context/FilmContext";
import UseFilm from "../hooks/useFilm";
import FilmDetails from "../showFilm/FilmDetails";

function FilmPage() {
  return (
    <div>
      <FilmContextProvider>
        <UseFilm>
          {(filmData) => <FilmDetails filmData={filmData} />}
        </UseFilm>
      </FilmContextProvider>  
    </div>
  )
}

export default FilmPage;
