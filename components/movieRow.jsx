                                                    
const MovieRow = ({ movie }) => {
  
  const addToGroovies = async () => {
    const res = await fetch('/api/addToGroovies', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(movie)
    });
    
  }

  return <div id={movie.imdbID}>{movie.Title} ({movie.Year}) <button onClick={addToGroovies}>Save</button></div>

}

export default MovieRow;
