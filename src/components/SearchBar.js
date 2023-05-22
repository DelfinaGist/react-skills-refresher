import React from 'react';

function SearchBar({ handleSearch }) {
  const handleChange = (event) => {
    handleSearch(event.target.value);
  };

  return (
    <div className="search">
      <input type="text" placeholder="Search" onChange={handleChange} />
    </div>
  );
}

export default SearchBar;
