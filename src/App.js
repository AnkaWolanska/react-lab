import {useState} from "react";
import "milligram";


function App() {
    const [title, setTitle] = useState('Wall-E');
    const movies = [
    {title: "Wall-E"},
    {title: "Pulp Fiction"},
    {title: "Matrix"},
    {title: "1670"},
];

    let feedback
        if (title.length < 5){feedback='Title is too short';}
            else if (title.length < 40){feedback='Title is just right';}
            else {feedback='Title is too long';}

    function handleChange(event) {
        setTitle(event.target.value);
    }

    function handleShowMovieClick(){
                alert(title);
    }

    return (
        <div>
            <h1>My favourite movies to watch</h1>
            <h2>Title</h2>
            <ul>
                {movies.map((movie) => <li key={movie.title}>{movie.title}</li>)}
            </ul>
            <h2>My favourite movie for today is {title}</h2>
            {title.length > 0 && <div>{feedback}</div>}
            <input type="text" value={title} onChange={handleChange}/>
            <button type="button" onClick={handleShowMovieClick}> Show title
            </button>
        </div>
    );
}


export default App;
