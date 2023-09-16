import React from "react"
import { Flex, Box, Image, Heading, Text } from '@chakra-ui/react'

function FilmDetails({ filmData }) {
  return (
    <Box className="container">
      <Flex className="show--top">
        <Image 
          boxSize="50vh"
          objectFit="contain"
          align="center"
          src={filmData.imageUrl} 
          alt="poster" 
          className="show--poster" 
        />
        <Box className="show--film-info">
          <Heading as="h2" className="show--film-title">{filmData.title} - {filmData.releaseYear}</Heading>
          <Flex className="show--film-ratings">
            <Box className="show--josh-rating">Josh rating: {filmData.joshScore}</Box>
            <Box className="show--other-ratings">
              <Text>IMDb rating: {filmData.imdbScore}</Text>
              <Text>RottenTomatoes Score: {filmData.rottenTomScore}</Text>
            </Box>
          </Flex>
        </Box>
      </Flex>
        <Box className="show--bottom">
          <Heading as="h2">What Josh says:</Heading>
          <Text className="show--josh-notes">{filmData.joshNotes}</Text>
        </Box>
    </Box>
  );
}


export default FilmDetails;