import './styles/movieModal.css';

const MovieModal = ({movie,onClose}) => {
    if (!movie) return null;
  return (
    <div className="modal-overlay" onClick={onClose}>
        <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-button" onClick={onClose}>X</button>
            <img src={movie.poster} alt={movie.title} />
            <div className="modal-info">
                <h2>{movie.title} ({movie.year})</h2>
               <p>Rating: {movie.rating}</p>
               <p>{movie.overview}</p>
               <button className="modal-action-btn">Watch Trailer</button>
               {/* console.log(movie); */}
            </div>

        </div>

    </div>
  );
};

export default MovieModal;
