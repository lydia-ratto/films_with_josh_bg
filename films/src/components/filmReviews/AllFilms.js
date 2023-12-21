import React, {useState, useEffect} from "react"
import UseFilmList from "../hooks/useFilmList";
import { FilmListContextProvider } from "../context/FilmListContext";
import AllFilmsContent from '../filmReviews/AllFilmsContent'
import SearchInput from "../sections/SearchInput";
import { Heading, Flex } from "@chakra-ui/react";
import SortSelector from "../sections/SortSelector";
import Popup from "../sections/Popup";

function AllFilms() {
  const [searchQuery, setSearchQuery] = useState("");
  const [sortType, setSortType] = useState("");
  const [apiUrl, setApiUrl] = useState("/api/v1/films");
  const [showPopup, setShowPopup] = useState(false);
  const popupText = "Hello Mr Bungard. Thank you for your film reviews, so far they are excellent and insightful. You might notice some changes, the bees have been working very hard behind the scenes to make this site better. We now have a sort, that sort-of works. More info has been added to the show page and some pesky bugs have been squashed. We're working on making the site mobile compatible for the new year, so keep an eye out for that. Please let your FWJB representative know if you have any feature requests or are experiencing any issues.\nHappy Holidays from the FWJB Dev team xx"
  const popupEndDate = "2023-12-20"

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  const handleSortType = (sort) => {
    setSortType(sort);
  };

  const handleApiUrlChange = (url) => {
    setApiUrl(url);
  };

  useEffect(() => {
    handleApiUrlChange("/api/v1/films");

    // Check if the current date is before 22-12-2023
    const currentDate = new Date();
    const targetDate = new Date(popupEndDate);

    if (currentDate < targetDate) {
      setShowPopup(true);
    }
  }, [searchQuery, sortType]);

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  return (
    <FilmListContextProvider>
      <UseFilmList searchQuery={searchQuery} apiUrl={apiUrl} sortType={sortType}>
        <Flex direction={"column"} alignItems={"center"}>
          <Heading className="yellow-outline">Find a film review</Heading>
          <Flex >
            <SearchInput onSearch={handleSearch} />
            <SortSelector onSortChange={handleSortType} />
          </Flex>
          <AllFilmsContent onPageChange={handleApiUrlChange} />
          {showPopup && (
            <Popup
              isOpen={showPopup}
              onClose={handleClosePopup}
              popupText={popupText}
            />
          )}
        </Flex>
      </UseFilmList>
    </FilmListContextProvider>
  );
}

export default AllFilms;