import React from 'react';
import { Box, Heading, Text } from '@chakra-ui/react'
import { useState } from 'react';

function Search() {
  const searchBar = () => {}
  const [searchInput, setSearchInput] = useState("");

  return (
    <Box className="search">
      <Heading as="h2">Find a film</Heading>
      <Text className="searchbar-input">search by title or director</Text>
    </Box>
  )
}

export default Search
