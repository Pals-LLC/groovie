const db = require("../../../models/db");

export default async function getGrooviesHandler(req, res) {
  const userID = req.query.userID;
  console.log(userID);
  try {
    const getGroovieString = {
      text: "SELECT m.title, m.year, m.poster FROM user_movies a INNER JOIN movies m ON a.omdb_id = m.omdb_id WHERE a.user_id = $1",
      values: [userID],
    };

    const results = await db.query(getGroovieString);
    const movies = results.rows;
    console.log(movies);
    return res.status(200).json(movies);
  } catch (err) {
    console.error(`Error finding user's groovies`);
  }
}
