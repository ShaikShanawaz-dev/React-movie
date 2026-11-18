import './styles/MovieCard.css';

const movieCard = ({ movie, openModal }) => {
  return (
      <div className="movie-Card" key={movie.id} onClick={() => openModal(movie)}>
         <img src={movie.poster} alt=""/>
         <h3>{movie.title}</h3>
         <p>Rating: {movie.rating}</p>
       </div>

  );
};

export default movieCard;