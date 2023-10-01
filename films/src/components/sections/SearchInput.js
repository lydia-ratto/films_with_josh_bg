import React, { useState } from "react";

function SearchInput({ onSearch }) {
  const [query, setQuery] = useState("");

  const handleInputChange = (e) => {
    const newQuery = e.target.value;
    setQuery(newQuery);
    onSearch(newQuery); 
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search films..."
        value={query}
        onChange={handleInputChange}
      />
    </div>
  );
}

export default SearchInput;