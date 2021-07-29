import { useState } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import MovieRow from '../components/MovieRow';
import groovie from '../public/images/groovie.svg';

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
      <header>
        <Image
            src={groovie}
            alt='Groovie Movie logo'
            width={160}
            height={120}
          />
        <Link href='/groovies' passHref>
          <a>My Groovies</a>
        </Link>
      </header>

      <h1>searchy</h1>
      <input
        type='text'
        value={searchInput}
        onChange={(e) => setSearchInput(e.target.value)}
      />
      <button onClick={searchClickHandler}>PUSH ME</button>

      <div>
        {searchResults.map(movie => <MovieRow key={movie.imdbID} movie={movie} />)}
      </div>  

    </>
  );
};

export default Search;
