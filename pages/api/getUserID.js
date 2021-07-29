const db = require("../../models/db");

export default async function getUserIDHandler(req, res) {
  const { accessToken } = req.body;
  try {
    const queryString = {
      text: "SELECT user_id FROM sessions WHERE access_token = $1;",
      values: [accessToken],
    };
    const queryResult = await db.query(queryString);
    const userID = queryResult.rows[0].user_id;
    res.status(200).json(userID);
  } catch (e) {
    console.error(`Error fetching user ID from Sessions table: ${e}`);
  }
}
