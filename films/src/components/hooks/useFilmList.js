import React from 'react';
import { useContext, useEffect } from 'react';
import axios from 'axios';
import FilmListContext, { initialFilmList } from '../context/FilmListContext';
import { useNavigate } from 'react-router';

const API_URL = "/api/v1/films"


function UseFilmList({children, searchQuery, apiUrl}) {
  const filmListCtx = useContext(FilmListContext);
  const navigate = useNavigate();
  const { filmList, updateFilmList } = filmListCtx;

  if (!apiUrl) {
    apiUrl = API_URL
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        updateFilmList({
          ...filmList,
          loading: false,
        }
        );

        if (searchQuery) {
          apiUrl += `?query=${searchQuery}`;
        }

        const response = await axios.get(apiUrl)
        const { data, pagy }  = response.data
        updateFilmList({
          items: data,
          pagy
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
  }, [searchQuery, apiUrl]);

  return <>{children}</>;
}

export default UseFilmList;
