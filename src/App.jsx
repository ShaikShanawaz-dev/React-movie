import React,{useState,useEffect} from 'react';
import './App.css';
import MovieCard from './Components/MovieCard';
import MovieModal from  './Components/MovieModal';
import mockData from './Data';
import Header from './Components/Header';


const MOVIES_INITIAL=20;
const MOVIES_PER_LOAD =10;

const App = () => {
  const [movies, setMovies] = useState([]);
  const [visibleCount, setVisibleCount] = useState(MOVIES_INITIAL);
  const [ModalMovie, setModalMovie] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortYear, setSortYear] =useState(null);
  const [darkMode,setDarkMode] = useState(false);
   console.log(darkMode);
  console.log(searchTerm);
  // console.log(ModalMovie);
  useEffect(() => {
    setMovies(mockData);
  }, []);
  console.log(movies);
  const filteredMovies = movies.filter((movie)=>
    movie.title.toLowerCase().includes(searchTerm.toLowerCase())
  );
  if(sortYear === "asc"){
    filteredMovies.sort((a,b)=> a.year -b.year);
  }else if(sortYear === "desc"){
    filteredMovies.sort((a,b)=> b.year - a.year);
  }
 

 
  const displayMovies = filteredMovies.slice(0, visibleCount);
  return (
    <div className={darkMode ? "app dark": "app"}>
      <Header 
       searchTerm={searchTerm}
       setSearchTerm={setSearchTerm} 
       sortYear={sortYear}
       setSortYear={setSortYear}
       darkMode={darkMode}
       setDarkMode={setDarkMode}
      />
      <div className="movie-list">
        {
          displayMovies.map((movie)=>(
            <MovieCard  key={movie.id} movie={movie} openModal={setModalMovie} /> 
            
          ))
        }
        {
          ModalMovie   && (
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