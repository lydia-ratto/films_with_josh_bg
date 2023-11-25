import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import { Box, Button } from '@chakra-ui/react';

function DeleteFilm() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  const handleDelete = async () => {
    try {
      setIsLoading(true);
      // Make an API request to delete the film by its ID
      await axios.delete(`/api/v1/films/${id}`);
      setIsLoading(false);
      // Redirect to a page after successful deletion, for example, the films list
      navigate('/films');
    } catch (error) {
      setIsLoading(false);
      console.error('Error deleting film:', error);
    }
  };

  return (
    <Box>
      <Button 
      onClick={handleDelete} 
      isLoading={isLoading}
      variant={"primary"}
      margin="1">
        Delete Review
      </Button>
    </Box>
  );
}

export default DeleteFilm;