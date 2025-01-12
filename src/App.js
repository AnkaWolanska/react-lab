import {useState} from "react";

function App() {
    const [title, setTitle] = useState('Wall-E');

    let feedback
        if (title.length < 5){feedback='Tytuł jest za krótki';}
            else if (title.length < 40){feedback='Tytuł jest w sam raz';}
            else {feedback='Tytuł jest za długi';}

    function handleChange(event) {
        setTitle(event.target.value);
    }

    return (
        <div>
            <h1>My favourite movies to watch</h1>
            <h2>My favourite movie for today is {title}</h2>
            <div>{feedback}</div>
            <input type="text" value={title} onChange={handleChange}/>
            <button type="button" onClick={() => alert(title)}> Pokaż tytuł
            </button>
        </div>
    );
}


export default App;
