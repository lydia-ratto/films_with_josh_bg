import React, { useState } from 'react';
import { Box, Input, Button, VStack, Text } from '@chakra-ui/react';
import axios from 'axios';
import { useNavigate } from 'react-router';

const API_URL = "http://localhost:3000/api/v1/films"

const FilmFinder = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [films, setFilms] = useState([]);
  const [selectedFilm, setSelectedFilm] = useState(null);
  const [formValues, setFormValues] = useState({
    josh_score: '',
    josh_notes: '',
    date_watched: '',
    seen_before: false,
    location_watched: '',
  });

  const navigate = useNavigate();

  const handleSearch = async () => {
    setSelectedFilm(null);
    const options = {
      method: 'GET',
      url: 'https://movie-database-alternative.p.rapidapi.com/',
      params: {
        s: searchTerm,
        r: 'json',
        page: '1',
      },
      headers: {
        'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
        'X-RapidAPI-Host': 'movie-database-alternative.p.rapidapi.com',
      },
    };

    try {
      const response = await axios.request(options);
      setFilms(response.data.Search);
    } catch (error) {
      console.error(error);
    }
  };

  const handleFormChange = (e) => {
    const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
    setFormValues({ ...formValues, [e.target.name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const payload = {
      ...formValues,
      imdb_id: selectedFilm.imdbID, // Set the imdb_id field with the selectedFilm's imdbID
    };

    axios.post(API_URL, payload)
      .then((response) => {
        console.log(response.data);
        navigate(`/films/${response.data.id}`)
            })
      .catch((error) => {
        console.error(error);
        // Handle the error case here
      });
  };

  return (
    <Box p={4}>
      <VStack spacing={4} align="center">
        <Input
          placeholder="Enter a film name"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <Button onClick={handleSearch}>Find Films</Button>
        {films.length > 0 ? (
          <VStack spacing={2} align="start">
            {films.map((film) => (
              <Text
                key={film.imdbID}
                onClick={() => setSelectedFilm(film)}
                cursor="pointer"
              >
                {film.Title}
              </Text>
            ))}
          </VStack>
        ) : (
          <Text>No films found</Text>
        )}
      </VStack>
      
      {selectedFilm && (
        <form onSubmit={handleSubmit}>
          <label>
            Film Title:
            <input
              type="text"
              value={selectedFilm.Title}
              readOnly
              name="imdb_id"
            />
          </label>
          <label>
            Josh Score:
            <input
              type="text"
              value={formValues.josh_score}
              onChange={handleFormChange}
              name="josh_score"
            />
          </label>
          <label>
            Josh Notes:
            <input
              type="text"
              value={formValues.josh_notes}
              onChange={handleFormChange}
              name="josh_notes"
            />
          </label>
          <label>
            Date Watched:
            <input
              type="date"
              value={formValues.date_watched}
              onChange={handleFormChange}
              name="date_watched"
            />
          </label>
          <label>
            Seen Before:
            <input
              type="checkbox"
              value={formValues.seen_before}
              onChange={handleFormChange}
              name="seen_before"
            />
          </label>
          <label>
            Location Watched:
            <input
              type="text"
              value={formValues.location_watched}
              onChange={handleFormChange}
              name="location_watched"
            />
          </label>
          <button type="submit">Submit</button>
        </form>
      )}
    </Box>
  );
};

export default FilmFinder;
