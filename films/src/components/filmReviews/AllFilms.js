import React, {useState} from "react"
import UseFilmList from "../hooks/useFilmList";
import { FilmListContextProvider } from "../context/FilmListContext";
import AllFilmsContent from '../filmReviews/AllFilmsContent'
import SearchInput from "../sections/SearchInput";
import { Heading, Flex } from "@chakra-ui/react";

function AllFilms() {
  const [searchQuery, setSearchQuery] = useState(""); // State to store the search query

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  return (
    <FilmListContextProvider>
      <UseFilmList searchQuery={searchQuery}>
        <Flex 
        direction={"column"}
        alignItems={"center"}>
          <Heading className="yellow-outline">Find a film review</Heading>
          <SearchInput onSearch={handleSearch} />
          <AllFilmsContent />
        </Flex>
      </UseFilmList>
    </FilmListContextProvider>
  )
}

export default AllFilms;
