import React from 'react';

const SearchBar = () => {
  return (
    <div className="mb-4">
      <input
        type="text"
        placeholder="Search meals..."
        className="w-full p-2 border rounded"
      />
    </div>
  );
};

export default SearchBar;
