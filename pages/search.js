import { useState } from 'react';
import Head from 'next/head';

const Search = () => {
  const [searchInput, setSearchInput] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const searchClickHandler = () => {
    fetch(`/api/search?searchInput=${searchInput}`)
      .then((res) => res.json())
      .then((res) => console.log(res))
      .catch((err) => console.error(err));
  };

  return (
    <>
      <h1>searchy</h1>
      <input
        type='text'
        value={searchInput}
        onChange={(e) => setSearchInput(e.target.value)}
      />
      <button onClick={searchClickHandler}>PUSH ME</button>
    </>
  );
};

export default Search;
