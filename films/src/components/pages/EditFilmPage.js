import React from 'react';
import { FilmContextProvider } from '../context/FilmContext';
import UseFilm from '../hooks/useFilm';
import EditFilmDetails from './editFilm/FilmEditDetails';

const EditFilmPage = () => {

  return (
    <FilmContextProvider>
      <UseFilm>
       {(filmData) => <EditFilmDetails filmData={filmData} />}
      </UseFilm>
    </FilmContextProvider>
  );
};

export default EditFilmPage;
