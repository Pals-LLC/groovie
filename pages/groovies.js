import { useState, useEffect } from 'react';

const Groovies = () => {
  const [groovies, setGroovies] = useState([]);

  useEffect(() => {
    // fetch user's groovies from database and save to state
  }, []);

  return <h1>Groovies</h1>;
};

export default Groovies;
