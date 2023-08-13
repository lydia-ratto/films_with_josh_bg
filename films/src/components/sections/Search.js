import React from 'react';
import { useState } from 'react';

function Search() {
  const searchBar = () => {}
  const [searchInput, setSearchInput] = useState("");

  return (
    <div className="search">
      <h2>Find a film</h2>
      <div className="searchbar-input">search by title or director</div>
    </div>
  )
}

export default Search
