import React from 'react';
import { useState, createContext } from 'react';

const FilmContext = createContext({
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
})

export function FilmContextProvider(props) {
  const [imdbId, setImdbId] = useState('');
  const [title, setTitle] = useState('');
  const [releaseYear, setReleaseYear] = useState('');
  const [director, setDirector] = useState('');
  const [summary, setSummary] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [locationWatched, setLocationWatched] = useState('');
  const [seenBefore, setSeenBefore] = useState('');
  const [joshScore, setJoshScore] = useState('');
  const [imdbScore, setImdbScore] = useState('');
  const [rottenTomScore, setRottenTomScore] = useState('');
  const [dateWatched, setDateWatched] = useState('');
  const [createdAt, setCreatedAt] = useState('');
  const [updatedAt, setUpdatedAt] = useState('');
  const [joshNotes, setJoshNotes] = useState('');
  const [filmLengthMins, setFilmLengthMins] = useState('');
  const [genres, setGenres] = useState('');
  const [language, setLanguage] = useState('');
  const [ageRating, setAgeRating] = useState('');

  function updateImdbIdHandler(id) {
    setImdbId(id);
  }
  function updateTitleHandler(id) {
    setTitle(id);
  }
  function updateReleaseYearHandler(year) {
    setReleaseYear(year);
  }
  function updateDirectorHandler(name) {
    setDirector(name);
  }
  function updateSummaryHandler(text) {
    setSummary(text);
  }
  function updateImageUrlHandler(link) {
    setImageUrl(link);
  }
  function updateLocationWatchedHandler(location) {
    setLocationWatched(location);
  }
  function updateSeenBeforeHandler(boolean) {
    setSeenBefore(boolean);
  }
  function updateJoshScoreHandler(score) {
    setJoshScore(score);
  }
  function updateImdbScoreHandler(score) {
    setImdbScore(score);
  }
  function updateRottenTomScoreHandler(score) {
    setRottenTomScore(score);
  }
  function updateDateWatchedHandler(date) {
    setDateWatched(date);
  }
  function updateCreatedAtHandler(date) {
    setCreatedAt(date);
  }
  function updateUpdatedAtHandler(date) {
    setUpdatedAt(date);
  }
  function updateJoshNotesHandler(text) {
    setJoshNotes(text);
  }
  function updateFilmLengthMinsHandler(num) {
    setFilmLengthMins(num);
  }
  function updateGenresHandler(list) {
    setGenres(list);
  }
  function updateLanguageHandler(lang) {
    setLanguage(lang);
  }
  function updateAgeRatingHandler(age) {
    setAgeRating(age);
  }
  function updateUpdateAllDataHandler(data) {
    const {
      imdbId,
      title,
      releaseYear,
      director,
      summary,
      imageUrl,
      locationWatched,
      seenBefore,
      joshScore,
      imdbScore,
      rottenTomScore,
      dateWatched,
      createdAt,
      updatedAt,
      joshNotes,
      filmLengthMins,
      genres,
      language,
      ageRating,
    } = data;

    setImdbId(imdbId);
    setTitle(title);
    setReleaseYear(releaseYear);
    setDirector(director);
    setSummary(summary);
    setImageUrl(imageUrl);
    setLocationWatched(locationWatched);
    setSeenBefore(seenBefore);
    setJoshScore(joshScore);
    setImdbScore(imdbScore);
    setRottenTomScore(rottenTomScore);
    setDateWatched(dateWatched);
    setCreatedAt(createdAt);
    setUpdatedAt(updatedAt);
    setJoshNotes(joshNotes);
    setFilmLengthMins(filmLengthMins);
    setGenres(genres);
    setLanguage(language);
    setAgeRating(ageRating);
  }

  const context = {
    imdbId,
    updateImdb: updateImdbIdHandler,
    title,
    updateTitle: updateTitleHandler,
    releaseYear,
    updateReleaseYear: updateReleaseYearHandler,
    director,
    updateDirector: updateDirectorHandler,
    summary,
    updateSummary: updateSummaryHandler,
    imageUrl,
    updateImageUrl: updateImageUrlHandler,
    locationWatched,
    updateLocationWatched: updateLocationWatchedHandler,
    seenBefore,
    updateSeenBefore: updateSeenBeforeHandler,
    joshScore,
    updateJoshScore: updateJoshScoreHandler,
    imdbScore,
    updateImdbScore: updateImdbScoreHandler,
    rottenTomScore,
    updateRottenTomScore: updateRottenTomScoreHandler,
    dateWatched,
    updateDateWatched: updateDateWatchedHandler,
    createdAt,
    updateCreatedAt: updateCreatedAtHandler,
    updatedAt,
    updateUpdatedAt: updateUpdatedAtHandler,
    joshNotes,
    updateJoshNotes: updateJoshNotesHandler,
    filmLengthMins,
    updateFilmLengthMins: updateFilmLengthMinsHandler,
    genres,
    updateGenres: updateGenresHandler,
    language,
    updateLanguage: updateLanguageHandler,
    ageRating,
    updateAgeRating: updateAgeRatingHandler
  }

  return (
    <FilmContextProvider value={context}>
      {props.children}
    </FilmContextProvider>
  )
}

export default FilmContext;
