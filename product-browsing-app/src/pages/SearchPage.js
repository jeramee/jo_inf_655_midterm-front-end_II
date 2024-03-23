// /pages/SearchPage.js

import React, { useEffect } from 'react';
import Search from '../components/Search';

const SearchPage = () => {
  useEffect(() => {
    console.log("SearchPage rendered");
  }, []);

  return (
    <div>
      <h1>Search Page</h1>
      <Search />
    </div>
  );
};

export default SearchPage;
