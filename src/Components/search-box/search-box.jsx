import React from 'react';

import './search-box.css';

export const SearchBox = ({placeholder, handleSearch}) => {
  return (
    <input
      className='search'
      type='search'
      placeholder={placeholder}
      onChange={handleSearch}
    />
  );
};
