import React, {useState} from "react"
import UseFilmList from "../hooks/useFilmList";
import { FilmListContextProvider } from "../context/FilmListContext";
import AllFilmsContent from '../filmReviews/AllFilmsContent'
import SearchInput from "../sections/SearchInput";
import { Heading } from "@chakra-ui/react";

function AllFilms() {
  const [searchQuery, setSearchQuery] = useState(""); // State to store the search query

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  return (
    <FilmListContextProvider>
      <Heading>Find a film review</Heading>
      <UseFilmList searchQuery={searchQuery}>
        <SearchInput onSearch={handleSearch} />
        <AllFilmsContent />
      </UseFilmList>
    </FilmListContextProvider>
  )
}

export default AllFilms;
