import React, {useState} from "react"
import UseFilmList from "../hooks/useFilmList";
import { FilmListContextProvider } from "../context/FilmListContext";
import AllFilmsContent from '../filmReviews/AllFilmsContent'
import SearchInput from "../sections/SearchInput";
import { Heading, Flex } from "@chakra-ui/react";

function AllFilms() {
  const [searchQuery, setSearchQuery] = useState(""); 
  const [apiUrl, setApiUrl] = useState("/api/v1/films");

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  const handleApiUrlChange = (url) => {
    console.log(`Setting url to: ${url}`);
    setApiUrl(url);
  }



  return (
    <FilmListContextProvider>
      <UseFilmList searchQuery={searchQuery} apiUrl={apiUrl}>
        <Flex 
        direction={"column"}
        alignItems={"center"}>
          <Heading className="yellow-outline">Find a film review</Heading>
          <SearchInput onSearch={handleSearch} />
          <AllFilmsContent onPageChange={handleApiUrlChange} />
        </Flex>
      </UseFilmList>
    </FilmListContextProvider>
  )
}

export default AllFilms;
