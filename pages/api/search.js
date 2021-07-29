const fetch = require('node-fetch');

export default async function searchHandler(req, res) {
  const searchInput = req.query.searchInput;
  const omdbResponse = await fetch(
    `https://www.omdbapi.com/?apikey=${process.env.OMDB_KEY}&s=${searchInput}`
  );

  const movieData = await omdbResponse.json();
  return res.status(200).json(movieData);
}
