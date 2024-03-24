import React, { useContext, useState, useEffect } from 'react';
import SearchTask from '../components/Search';
import { ProductContext } from '../../context/ProductContext'; // Adjusted import path

const SearchPage = () => {
  const { products } = useContext(ProductContext);
  const [searchTerm, setSearchTerm] = useState('');

  // Implement search logic here

  useEffect(() => {
    console.log("SearchPage rendered");
  }, []);

  return (
    <div>
      <h1>Search Page</h1>
      <SearchTask search={searchTerm} setSearch={setSearchTerm} />
      {/* Display search results here */}
    </div>
  );
};

export default SearchPage;
