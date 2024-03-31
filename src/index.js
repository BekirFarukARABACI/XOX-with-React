import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import './index.css'


function XoxGameComponent() {
  const [games, setGames] = useState([]);
  const [mark, setMark] = useState("X");
  const [message, setMessage] = useState("");
  const [isGameFinish, setIsGameFinish] = useState(false);

  useEffect(() => {
    newGame()
  }, [])

  const newGame = () => {
    setGames([
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      ""
    ]);

    setIsGameFinish(false);
    setMark("X")
    setMessage("Hamle Sırası : " + mark)
  }

  const markGame = (index) => {
    if (!isGameFinish) {
      const newGames = [...games];
      if (newGames[index] == "") {
        newGames[index] = mark;
        setGames(newGames)
        mark == "X" ? setMark("O") : setMark("X")
        setMessage("Hamle Sırası : " + (mark == "X" ? "O" : "X"))
      }
    }
  }

  return (
    <>
      <div className='container text-center'>
        <h1 className='alert'>XOX Game</h1>
        <h2 className='alert alert-warning'>
          {message}
        </h2>
        <button className='btn btn-outline-primary w-100'
          onClick={newGame}>
          Yeni Oyun
        </button>
        <div className='row mt-2'>
          {games.map((game, index) => (
            <div key={index}
              className='col-4 box'
              onClick={() => markGame(index)}>
              {game}
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<XoxGameComponent />);

reportWebVitals();
