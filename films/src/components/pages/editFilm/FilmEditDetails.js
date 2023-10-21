import React, { useState } from 'react';
import { Box, Input, Button, Heading, Flex, Checkbox } from '@chakra-ui/react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router';

const API_URL = "http://localhost:3000/api/v1/films/"

const EditFilmDetails = ({ filmData }) => {
  console.log(filmData);
  const { id } = useParams();
  const [formValues, setFormValues] = useState({
    josh_score: '',
    josh_notes: '',
    date_watched: '',
    seen_before: false,
    location_watched: '',
  });
  const navigate = useNavigate();

  const handleFormChange = (e) => {
    const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
    setFormValues({ ...formValues, [e.target.name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("handling submit");
    const payload = {
      ...formValues    };

    axios.put(API_URL + id, payload)
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
    <Box>
      <Heading textStyle="h1">Edit review for {filmData.title}</Heading>

      <form onSubmit={handleSubmit}>
        <Flex direction="column" alignItems="center">
          <Input
            variant="filled"
            type="date"
            value={formValues.date_watched}
            onChange={handleFormChange}
            name="date_watched"
            placeholder={filmData.dateWatched}
          />
          <Input
            variant="filled"
            type="text"
            value={formValues.location_watched}
            onChange={handleFormChange}
            name="location_watched"
            placeholder={filmData.locationWatched}
          />
          <Input
            variant="filled"
            type="number"
            value={formValues.josh_score}
            onChange={handleFormChange}
            name="josh_score"
            placeholder={filmData.joshScore}
          />
          <Input
            variant="filled"
            type="textarea"
            value={formValues.josh_notes}
            onChange={handleFormChange}
            name="josh_notes"
            placeholder={filmData.joshNotes}
          />
          <Checkbox
            variant="empty"
            type="checkbox"
            value={formValues.seen_before}
            onChange={handleFormChange}
            name="seen_before"
            spacing="1rem"
            mt="20px"
          >
            Seen before
          </Checkbox>
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
    </Box>
  );
};

export default EditFilmDetails;