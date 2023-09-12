import React from "react";
import { FilmContextProvider } from "../context/FilmContext";
import UseFilm from "../hooks/useFilm";
import FilmDetails from "../showFilm/FilmDetails";

function FilmPage() {
  console.log("In film page");
  return (
    <div>
      <FilmContextProvider>
        <UseFilm>
          <FilmDetails />
        </UseFilm>
      </FilmContextProvider>  
    </div>
  )
}

export default FilmPage;
