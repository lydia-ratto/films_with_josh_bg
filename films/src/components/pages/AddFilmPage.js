import React, { useState, useEffect } from 'react';
import { Box, Input, Button, VStack, Text, Heading, Flex, Textarea, NumberInput, NumberInputField, FormControl, FormLabel } from '@chakra-ui/react';
import axios from 'axios';
import { useNavigate } from 'react-router';
import { toast } from 'react-toastify';

const API_URL = "/api/v1/films"
const API_LIMIT = 300

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

  const [apiCalls, setApiCalls] = useState(0);

  useEffect(() => {
    const savedDate = localStorage.getItem('apiCallDate');
    const savedCalls = parseInt(localStorage.getItem('apiCalls'), 10);

    if (savedDate && savedCalls) {
      const currentDate = new Date().toDateString();
      if (savedDate === currentDate) {
        setApiCalls(savedCalls);
      } else {
        localStorage.setItem('apiCallDate', currentDate);
        localStorage.setItem('apiCalls', '0');
        setApiCalls(0);
      }
    } else {
      const currentDate = new Date().toDateString();
      localStorage.setItem('apiCallDate', currentDate);
      localStorage.setItem('apiCalls', '0');
      setApiCalls(0);
    }
  }, []);

  const incrementApiCalls = () => {
    const newCalls = apiCalls + 1;
    setApiCalls(newCalls);
    localStorage.setItem('apiCalls', newCalls.toString());
  };

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
      // Check if the limit has been reached
      incrementApiCalls()
      if (apiCalls >= API_LIMIT) {
        toast.error('API call limit reached for today');
        return;
      }

      const response = await axios.request(options);
      setFilms(response.data.Search);
      if (!response.data.Search || response.data.Search.length < 1) {toast.info(`No films found for ${searchTerm}. Try searching whole words - partial words aren't supported`)}
    } catch (error) {
      console.error(error);
      toast.error(error)
    }
  };

  const handleFormChange = (e) => {
    const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
    setFormValues({ ...formValues, [e.target.name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("handling submit");
    const payload = {
      ...formValues,
      imdb_id: selectedFilm.imdbID, // Set the imdb_id field with the selectedFilm's imdbID
    };

    axios.post(API_URL, payload)
      .then((response) => {
        console.log(response.data);
        toast.success(`Review for ${response.data.title} created`)
        navigate(`/films/${response.data.id}`)
            })
      .catch((error) => {
        console.error(error);
        // Handle the error case here
        toast.error(`Shit! Something went wrong. ${error}`)
      });
  };

  return (
    <Box>
      <Heading textStyle="h1">Add review</Heading>
      <VStack spacing={4} align="center">
        {selectedFilm == null ? (
        <>
        <Input
          variant="filled"
          placeholder="Enter a film name"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <Button onClick={handleSearch} variant="primary" size={'lg'} type='submit'>Find film</Button>
        {films?.length > 0 ? (
          <VStack spacing={2} align="start">
            {films.map((film) => (
              <Button
                key={film.imdbID}
                onClick={() => setSelectedFilm(film)}
                width={'400px'}
                variant={'tertiary'}  
                      >
                {`${film.Title} - ${film.Year}`}
              </Button>
            ))}
          </VStack>
        ) : (
          <Text>Search to find a film to review</Text>
        )}
        </>
        ) : 
        <Button
        variant='secondary'
        size='lg'
        onClick={() => setSelectedFilm(null)}>
          Change film
          </Button>}
      </VStack>

      {selectedFilm && (
        <form onSubmit={handleSubmit}>
          <Flex direction="column" alignItems="center">
            <FormControl position={'unset'} width={'unset'}>
              <FormLabel margin={'10px 0px 5px 10px'}
              >Film Title</FormLabel>
              <Input
                variant="filled"
                type="text"
                value={selectedFilm.Title}
                readOnly
                name="imdb_id"
                marginTop={'0px'}
              />
            </FormControl>
            <FormControl position={'unset'} width={'unset'}>
              <FormLabel margin={'10px 0px 5px 10px'} >Date Watched</FormLabel>
              <Input
                variant="filled"
                type="date"
                value={formValues.date_watched}
                onChange={handleFormChange}
                name="date_watched"
                placeholder="When was it?"
                marginTop={'0px'}
              />
            </FormControl>
            <FormControl position={'unset'} width={'unset'}>
              <FormLabel margin={'10px 0px 5px 10px'} >Location Watched</FormLabel>
              <Input
                variant="filled"
                type="text"
                value={formValues.location_watched}
                onChange={handleFormChange}
                name="location_watched"
                placeholder="Where were you?"
                marginTop={'0px'}
              />
            </FormControl>
            <FormControl position={'unset'} width={'unset'}>
              <FormLabel margin={'10px 0px 5px 10px'} >Josh Score</FormLabel>
              <NumberInput
            defaultValue={1}
            min={1}
            max={10}
            step={1}
            variant="filled"
            value={formValues.josh_score}
            onChange={(value) => handleFormChange({ target: { name: 'josh_score', value } })}
          >
            <NumberInputField 
              type="number"
              name="josh_score"
              marginTop="0px"
            />
          </NumberInput>
            </FormControl>
            <FormControl position={'unset'} width={'unset'}>
              <FormLabel margin={'10px 0px 5px 10px'} >Josh Notes</FormLabel>
              <Textarea
                variant="filled"
                value={formValues.josh_notes}
                onChange={handleFormChange}
                name="josh_notes"
                placeholder="Extra notes"
                minHeight="200px"
                marginTop={'0px'}
              />
            </FormControl>
            <Button
              type="submit"
              variant='primary'
              size={'lg'}
              mt="25px"
            >
              Submit
            </Button>
          </Flex>
        </form>
      )}
    </Box>
  );
};

export default FilmFinder;
