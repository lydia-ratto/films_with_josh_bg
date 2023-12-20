import { Select, Box } from "@chakra-ui/react";
import React, { useState } from "react";

function SortSelector({ onSortChange }) {
  const [selectedSort, setSelectedSort] = useState("");

  const handleSortChange = (e) => {
    const newSort = e.target.value;
    setSelectedSort(newSort);
    onSortChange(newSort);
  };

  const sortOptions = [
    { label: "Date added (asc)", value: "date_added_asc" },
    { label: "Date added (desc)", value: "date_added_desc" },
    { label: "Date released (asc)", value: "date_released_asc" },
    { label: "Date released (desc)", value: "date_released_desc" },
    { label: "Score (asc)", value: "score_asc" },
    { label: "Score (desc)", value: "score_desc" },
  ];

  return (
    <Box>
      <Select
        placeholder="Sort by..."
        value={selectedSort}
        onChange={handleSortChange}
        variant="filled"
      >
        {sortOptions.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </Select>
    </Box>
  );
}

export default SortSelector;
