import { Input, Box } from "@chakra-ui/react";
import React, { useState } from "react";

function SearchInput({ onSearch }) {
  const [query, setQuery] = useState("");

  const handleInputChange = (e) => {
    const newQuery = e.target.value;
    setQuery(newQuery);
    onSearch(newQuery); 
  };

  return (
    <Box>
      <Input
        type="text"
        placeholder="Search films..."
        value={query}
        onChange={handleInputChange}
      />
    </Box>
  );
}

export default SearchInput;