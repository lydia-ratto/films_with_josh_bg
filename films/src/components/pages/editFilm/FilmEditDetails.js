import React, { useEffect, useState } from 'react';
import { Box, Input, Button, Heading, Flex, FormControl, FormLabel, NumberInput, NumberInputField, Textarea } from '@chakra-ui/react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router';
import { toast } from 'react-toastify';

const API_URL = "http://localhost:3000/api/v1/films/" 

const EditFilmDetails = ({ filmData }) => {
  const { id } = useParams();
  const [formValues, setFormValues] = useState({
    josh_score: '',
    josh_notes: '',
    date_watched: '',
    location_watched: '',
  });
  const navigate = useNavigate();

  useEffect(() => {
    if (filmData) {
      setFormValues({
        josh_score: filmData.josh_score,
        josh_notes: filmData.joshNotes,
        date_watched: filmData.dateWatched,
        location_watched: filmData.locationWatched,
      });
    }
  }, [filmData]);

  const handleFormChange = (e) => {
    let value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
    setFormValues({ ...formValues, [e.target.name]: value });
    console.log(formValues);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("handling submit");
    const payload = {
      ...formValues, imdb_id: filmData.imdbID};

    axios.put(API_URL + id, payload)
      .then((response) => {
        console.log(response.data);
        toast.success(`Review for ${filmData.title} has been edited`)
        navigate(`/films/${response.data.id}`)
            })
      .catch((error) => {
        console.error(error);
        toast.error(`Unable to edit review: ${error}`)
      });
  };

    return (
      <Box>
      <Heading as="h1">Edit review for {filmData.title}</Heading>

      <form onSubmit={handleSubmit}>
        <Flex direction="column" alignItems="center">
          <FormControl position="unset" width="unset">
            <FormLabel margin="10px 0px 5px 10px">Date Watched</FormLabel>
            <Input
              variant="filled"
              type="date"
              value={formValues.date_watched}
              onChange={handleFormChange}
              name="date_watched"
              placeholder="When was it?"
              marginTop="0px"
            />
          </FormControl>

          <FormControl position="unset" width="unset">
            <FormLabel margin="10px 0px 5px 10px">Location Watched</FormLabel>
            <Input
              variant="filled"
              type="text"
              value={formValues.location_watched}
              onChange={handleFormChange}
              name="location_watched"
              placeholder="Where were you?"
              marginTop="0px"
            />
          </FormControl>

          <FormControl position="unset" width="unset">
            <FormLabel margin="10px 0px 5px 10px">Josh Score</FormLabel>
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

          <FormControl position="unset" width="unset">
            <FormLabel margin="10px 0px 5px 10px">Josh Notes</FormLabel>
            <Textarea
              variant="filled"
              value={formValues.josh_notes}
              onChange={handleFormChange}
              name="josh_notes"
              placeholder="Extra notes"
              minHeight="200px"
              marginTop="0px"
            />
          </FormControl>
          <Button
            type="submit"
            variant="primary"
            size="lg"
            marginTop="25px"
          >
            Submit
          </Button>
        </Flex>
      </form>
    </Box>
    );
};

export default EditFilmDetails;