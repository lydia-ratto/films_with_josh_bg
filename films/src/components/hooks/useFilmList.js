import React from 'react';
import { useContext, useEffect } from 'react';
import axios from 'axios';
import FilmListContext, { initialFilmList } from '../context/FilmListContext';
import { useNavigate } from 'react-router';

function UseFilmList({ children, searchQuery, sortType, apiUrl }) {
  const filmListCtx = useContext(FilmListContext);
  const navigate = useNavigate();
  const { filmList, updateFilmList } = filmListCtx;

  const constructApiUrl = () => {
  
    // Remove existing search and sort parameters
    let url = apiUrl

    // Add search parameter if exists
    if (searchQuery) {
      url += `?query=${encodeURIComponent(searchQuery)}`;
    }

    // Add sort parameter if exists
    if (sortType) {
      const separator = url.includes('?') ? '&' : '?';
      url += `${separator}sort=${encodeURIComponent(sortType)}`;
    }

    return url;
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        updateFilmList({
          ...filmList,
          loading: true, // Set loading to true while fetching data
        });

        const response = await axios.get(constructApiUrl());
        const { data, pagy } = response.data;

        updateFilmList({
          items: data,
          pagy,
          loading: false, // Set loading back to false after successful data fetch
        });
      } catch (onError) {
        filmListCtx.updateFilmList({
          ...initialFilmList,
          loading: false,
        });
        navigate('/films', { replace: true });
      }
    };

    fetchData();
  }, [searchQuery, apiUrl, sortType]);

  return <>{children}</>;
}

export default UseFilmList;
