import React,{useState,useEffect} from 'react';
import './App.css';
import MovieCard from './Components/MovieCard';
import MovieModal from  './Components/MovieModal';
import mockData from './Data';


const MOVIES_INITIAL=20;
const MOVIES_PER_LOAD =10;

const App = () => {
  const [movies, setMovies] = useState([]);
  const [visibleCount, setVisibleCount] = useState(MOVIES_INITIAL);
  const [ModalMovie, setModalMovie] = useState(null);
  // console.log(ModalMovie);
  useEffect(() => {
    setMovies(mockData);
  }, []);
  console.log(movies);
  const displayMovies =movies.slice(0, visibleCount);
  return (
    <div className="App">
      <div className="movie-list">
        {
          displayMovies.map((movie)=>(
            <MovieCard  key={movie.id} movie={movie} openModal={setModalMovie} /> 
            
          ))
        }
        {
          MovieModal && (
            <MovieModal movie={ModalMovie} onClose={()=>setModalMovie(null)} />
          )
        }

  
      </div>
      <div className="load-more">
        <button  className="load-more-btn" onClick={() => setVisibleCount(visibleCount + MOVIES_PER_LOAD)}>
          Load More
        </button>
      </div>
    </div>
  );
};

export default App;