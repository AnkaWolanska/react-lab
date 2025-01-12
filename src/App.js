import {useState} from "react";

function App() {
    const [title, setTitle] = useState('Wall-E');

    function handleChange(event) {
        setTitle(event.target.value);
    }

    let feedback
        if (title.length < 5){feedback='Tytuł jest za krótki';}
            else if (title.length < 30){feedback='Tytuł jest w sam raz';}
            else {feedback='Tytuł jest za długi';}


    return (
        <div>
            <h1>My favourite movies to watch</h1>
            <h2>My favourite movie for today is {title}</h2>
            <input type="text" value={title} onChange={handleChange}/>
            {
    title.length > 0 && <div>{feedback}</div>
}
        </div>
    );
}



export default App;
