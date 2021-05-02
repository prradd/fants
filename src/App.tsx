import React, {useState} from 'react';
import './App.css';
import {fantsData} from './Data/fants'

function App() {
    const [randomFant, setRandomFant] = useState("Крути!");

    const HandleClick = () => {
        const randomNum = Math.floor(Math.random() * fantsData.length);
        setRandomFant(fantsData[randomNum]?.fantText);
    }

    return (
        <div className="App">
            <div className="fant-text">
                {randomFant}
            </div>
            <button
                id="spin"
                className="neon-button"
                onClick={() => HandleClick()}
            >Верти!</button>
        </div>
    );
}

export default App;
