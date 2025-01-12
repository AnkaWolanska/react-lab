import {useState} from "react";
import "milligram";


function App() {
    const [title, setTitle, year, setYear] = useState('Wall-E');
    const [movies, setMovies] = useState([]);

    let feedback
        if (title.length < 5){feedback='Title is too short';}
            else if (title.length < 40){feedback='Title is just right';}
            else {feedback='Title is too long';}

    function handleChange(event) {
        setTitle(event.target.value);
    }

    function chandleMovieAdd() {
        const newMovie = {title: title};
        setMovies([...movies, newMovie]);
    }

    return (
        <div>
            <h1>My favourite movies to watch</h1>
            <h2>Titles</h2>
            <ul>
                {movies.map((movie) => <li key={movie.title}>{movie.title}</li>)}
            </ul>
            <h2>Add movie</h2>
            <h3>Title</h3>
            <input
                type="text"
                value={title}
                onChange={handleChange}
                placeholder="Enter a movie title"
            />
            {title.length > 0 && <div>{feedback}</div>}

            <button type="button" onClick={chandleMovieAdd}>
                Add New Movie
            </button>
        </div>
    );
}


export default App;
