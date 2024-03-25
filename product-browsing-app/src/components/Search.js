// /components/Search.js

import React from 'react';

const Search = ({ search, setSearch, handleSearch }) => {
    const handleSearchChange = (e) => {
        setSearch(e.target.value);
    };

    return (
        <div>
            <input
                type="text"
                value={search}
                onChange={handleSearchChange}
                placeholder="Search products..."
            />
            <button onClick={handleSearch}>Search</button>
        </div>
    );
};

export default Search;
