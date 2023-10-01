import React from 'react';
import { useContext, useEffect } from 'react';
import axios from 'axios';
import FilmListContext, { initialFilmList } from '../context/FilmListContext';
import { useNavigate } from 'react-router';

const API_URL = "http://localhost:3000/api/v1/films"


function UseFilmList({children, searchQuery}) {
  const filmListCtx = useContext(FilmListContext);
  const navigate = useNavigate();
  const { filmList, updateFilmList } = filmListCtx;

  useEffect(() => {
    const fetchData = async () => {
      try {
        updateFilmList({
          ...filmList,
          loading: false,
        }
        );
        let apiUrl = API_URL

        if (searchQuery) {
          apiUrl += `?query=${searchQuery}`;
        }

        const response = await axios.get(apiUrl)
        const data = response.data
        updateFilmList({
          items: data
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
  }, [searchQuery]);

  return <>{children}</>;
}

export default UseFilmList;
