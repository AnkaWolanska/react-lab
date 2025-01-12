import {useState} from "react";
import "milligram";


function App() {
    const [title, setTitle] = useState('Wall-E');
    const [movies, setMovies] = useState([
    {title: "Wall-E"},
    {title: "Pulp Fiction"},
    {title: "Matrix"},
    {title: "1670"},
]);

    let feedback
        if (title.length < 5){feedback='Title is too short';}
            else if (title.length < 40){feedback='Title is just right';}
            else {feedback='Title is too long';}

    function handleChange(event) {
        setTitle(event.target.value);
    }

    function addMovie() {
        if (title.trim() && !movies.some(movie => movie.title === title)) {
            setMovies([...movies, { title }]);
        } else {
            alert("Movie title is either empty or already exists!");
        }
    }

    return (
        <div>
            <h1>My favourite movies to watch</h1>
            <h2>Titles</h2>
            <ul>
                {movies.map((movie) => <li key={movie.title}>{movie.title}</li>)}
            </ul>
            <h2>My favourite movie for today is {title}</h2>
            {title.length > 0 && <div>{feedback}</div>}
            <input
                type="text"
                value={title}
                onChange={handleChange}
                placeholder="Enter a movie title"
            />
            <button type="button" onClick={addMovie}>
                Add Movie
            </button>
        </div>
    );
}


export default App;
