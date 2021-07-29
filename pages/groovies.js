import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateUser } from "../redux/actions/actionCreators";
import { useSession } from "next-auth/client";

const Groovies = () => {
  const [groovies, setGroovies] = useState([]);
  const [session, loading] = useSession();
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();

  useEffect(() => {
    // fetch user's groovies from database and save to state
    if (session) {
      fetch("api/getUserID", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ accessToken: session.accessToken }),
      })
        .then((res) => res.json())
        .then((userID) => dispatch(updateUser(userID)));
    }
  }, []);

  useEffect(() => {}, []);

  return (
    <>
      <h1>Groovies</h1>
    </>
  );
};

export default Groovies;
