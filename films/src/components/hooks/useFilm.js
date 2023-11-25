import React from 'react';
import { useContext, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom'
import { useNavigate } from 'react-router';
import FilmContext from '../context/FilmContext';

const API_URL = "/api/v1/films"

function UseFilm({children}) {
  const filmCtx = useContext(FilmContext);
  const navigate = useNavigate();
  const { id } = useParams();
  const { filmData, updateFilmData } = filmCtx;

  useEffect(() => {
    const fetchData = async () => {
      try {
        updateFilmData({
          ...filmData,
          loading: false,
        }
        );
        const response = await axios.get(`${API_URL}/${id}`)
        const data = response.data
        updateFilmData({
          ...filmData,
          title: data.title,
          imdbId: data.imdb_id,
          releaseYear: data.release_year,
          imageUrl: data.image_url,
          locationWatched: data.location_watched,
          seenBefore: data.seen_bvefore,
          joshScore: data.josh_score,
          imdbScore: data.imdb_score,
          rottenTomScore: data.rotten_tom_score,
          dateWatched: data.date_watched,
          createdAt: data.created_at,
          updatedAt: data.updated_at,
          joshNotes: data.josh_notes,
          filmLengthMins: data.film_length_mins,
          ageRating: data.age_rating,
          summary: data.summary,
          genres: data.genres,
          director: data.director
        })
      } catch (onError) {
        filmCtx.updateFilm({
          ...FilmContext,
          loading: false,
        })
        navigate(`/films/${id}`, { replace: true });
      }
    };
    fetchData();
  }, []);

  return <>{children(filmData)}</>;
}

export default UseFilm;
