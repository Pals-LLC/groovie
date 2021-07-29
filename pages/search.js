import { useState } from 'react';
import Head from 'next/head';
import Header from '../components/Header';
import MovieRow from '../components/movieRow';
import videoIcon from '../public/icons/video.svg';

const Search = () => {
  const [searchInput, setSearchInput] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const searchClickHandler = () => {
    fetch(`/api/search?searchInput=${searchInput}`)
      .then((res) => res.json())
      .then((results) => setSearchResults(results.Search))
      .catch((err) => console.error(err));
  };

  return (
    <>
      <Head>
        <title>Search | Groovie Movie</title>
      </Head>
      <Header icon={videoIcon} nav='/groovies' />
      <h1>searchy</h1>
      <input
        type='text'
        value={searchInput}
        onChange={(e) => setSearchInput(e.target.value)}
      />
      <button onClick={searchClickHandler}>PUSH ME</button>

      <div>
        {searchResults.map((movie) => (
          <MovieRow key={movie.imdbID} movie={movie} />
        ))}
      </div>
    </>
  );
};

export default Search;
