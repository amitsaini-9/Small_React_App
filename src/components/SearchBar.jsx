import React from "react";

const SearchBar = ({ searchQuery, setSearchQuery }) => {
  const handleInputChange = (e) => {
    setSearchQuery(e.target.value);
  };

  return (
    <form class="d-flex" role="search">
      <input
        type="search"
        placeholder="Search Pokémon..."
        value={searchQuery}
        onChange={handleInputChange}
        className="search-bar form-control me-2"
        aria-label="Search"
      />
    </form>
  );
};

export default SearchBar;
