const db = require('../../models/db');

export default async function addToGrooviesHandler(req, res) {
  //send user id & omdb id
  const { movie, user } = req.body;

  const { Title, Year, Poster, imdbID } = movie;
  //db write
  try {
    const insertMovieString = {
      text: 'INSERT INTO movies (omdb_id, title, year, poster) VALUES($1, $2, $3, $4)',
      values: [imdbID, Title, Year, Poster],
    };

    await db.query(insertMovieString);
  } catch (e) {
    console.error(`Error adding movie to the movies table: ${e}`);
  }

  try {
    const insertGroovieString = {
      text: 'INSERT INTO user_movies (user_id, omdb_id) VALUES($1, $2)',
      values: [user.id, imdbID],
    };
    await db.query(insertGroovieString);

    return res
      .status(200)
      .send(`movie ${Title} added to ${user.id}'s groovies successfully`);
  } catch (e) {
    console.error(`Error adding groovies to the user_movies table: ${e}`);
    return res.status(500).send('Movie was not added to favorites');
  }
}
