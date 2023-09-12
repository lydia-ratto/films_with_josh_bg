import React, { useState, createContext } from 'react';

const initialFilmData = {
  imdbId: '',
  title: '',
  releaseYear: '',
  director: '',
  summary: '',
  imageUrl: '',
  locationWatched: '',
  seenBefore: '',
  joshScore: '',
  imdbScore: '',
  rottenTomScore: '',
  dateWatched: '',
  createdAt: '',
  updatedAt: '',
  joshNotes: '',
  filmLengthMins: '',
  genres: '',
  language: '',
  ageRating: '',
};

const FilmContext = createContext({
  filmData: initialFilmData,
  updateFilmData: () => {},
});

export function FilmContextProvider(props) {
  const [filmData, setFilmData] = useState(initialFilmData);

  function updateFilmDataHandler(data) {
    setFilmData((prevData) => ({
      ...prevData,
      ...data,
    }));
  }

  const context = {
    filmData,
    updateFilmData: updateFilmDataHandler,
  };

  return (
    <FilmContext.Provider value={context}>
      {props.children}
    </FilmContext.Provider>
  );
}

export default FilmContext;