import db from '../../models/db';

export default async function removeGroovieHandler(req, res) {
  const { movie, user } = req.body;

  try {
    const removeQueryString = {
      text: 'DELETE FROM user_movies WHERE user_id = $1 AND omdb_id = $2',
      values: [user.id, movie.omdb_id],
    };

    await db.query(removeQueryString);

    return res.status(201).send('Groovie successfully removed.');
  } catch (e) {
    return console.error(`Error removing groovie from database: ${e}`);
  }
}
