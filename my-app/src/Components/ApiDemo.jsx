import React, { useState, useEffect } from "react";

function ApiDemo() {
    const [joke, setJoke] = useState([]);

    const fetchJoke = async () => {
        const response = await fetch("https://api.chucknorris.io/jokes/random");
        const data = await response.json();
        // console.log(data)
        setJoke(data);
    };

    useEffect(() => {
        fetchJoke();
    }, []);

    return (
        <div className="App">
            <p> {joke.value} </p>
            <button onClick={fetchJoke}> Get New Joke </button>
        </div>
    );
}

export default ApiDemo
