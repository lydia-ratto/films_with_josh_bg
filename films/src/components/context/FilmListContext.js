import React from 'react';
import { useState, createContext } from 'react';

export const initialFilmList = {
  items: [],
  total: 0,
  loading: false,
  error: null,
}

const FilmListContext = createContext({
  filmList: initialFilmList,
  updateFilmList: () => {},
})

export function FilmListContextProvider({children}) {
  const [filmList, setFilmList] = useState(initialFilmList);

  function updateFilmListHandler(filmList) {
    setFilmList(filmList);
  }

  const value = {
    filmList,
    updateFilmList: updateFilmListHandler,
  }
  return (
    <FilmListContext.Provider value={value}>
      {children}
    </FilmListContext.Provider>
  );
}

export default FilmListContext;
