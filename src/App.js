import {useState} from "react";
import "milligram";


function App() {
    const [title, setTitle] = useState();
    const [year, setYear] = useState();
    const [movies, setMovies] = useState([]);

    let feedback
        if (title.length < 5){feedback='Title is too short';}
            else if (title.length < 40){feedback='Title is just right';}
            else {feedback='Title is too long';}

    function handleChange(event) {
        setTitle(event.target.value);
    }

    return (
        <div>
            <h1>My favourite movies to watch</h1>
            <h2>Titles</h2>
            <ul>
                {movies.map((movie) => <li key={movie.title}>{movie.title}({movie.year})</li>)}
            </ul>
            <h2>Add movie</h2>
            <label>Title</label>
            <input
                type="text"
                value={title}
                onChange={handleChange}
                placeholder="Enter a movie title"
            />
            {title.length > 0 && <div>{feedback}</div>}
            <label>Year</label>
            <input
                type="text"
                value={year}
                onChange={(event) => setYear(event.target.value)}
                placeholder="Enter a movie year"
            />
            {title.length > 0 && <div>{feedback}</div>}

            <button type="button" onClick={() => setMovies([...movies, {title, year}])}>
                Add New Movie
            </button>
        </div>
    );
}


export default App;
