import React from 'react';
import { useContext, useEffect } from 'react';
import axios from 'axios';
import FilmListContext, { initialFilmList } from '../context/FilmListContext';
import { useNavigate } from 'react-router';

const API_URL = "http://localhost:3000/api/v1/films"


function UseFilmList({children}) {
  const filmListCtx = useContext(FilmListContext);
  const navigate = useNavigate();
  const { filmList, updateFilmList } = filmListCtx;
  const { items: prev } = filmList;

  useEffect(() => {
    const fetchData = async () => {
      try {
        updateFilmList({
          ...filmList,
          loading: false,
        }
        );
        const response = await axios.get(API_URL)
        const data = response.data
        updateFilmList({
          ...filmList,
          items: prev.concat(data)
        })
      } catch (onError) {
        filmListCtx.updateFilmList({
          ...initialFilmList,
          loading: false,
        })
        navigate('/films', { replace: true });
      }
    };
    fetchData();
  }, []);

  console.log(filmList);

  return <>{children}</>;
}

export default UseFilmList;
