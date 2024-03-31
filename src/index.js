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

        let e = isMoveFinish(newGames);
        if(e){
          setMessage("Oyun Berabere")
          setIsGameFinish(true)
          return
        }

        let r = isGameOver(newGames);
        if(r){
          setMessage("Oyunun Kazananı : " + mark)
          setIsGameFinish(true)
          return
        }

        mark == "X" ? setMark("O") : setMark("X")
        setMessage("Hamle Sırası : " + (mark == "X" ? "O" : "X"))
      }
    }
  }

  const isGameOver = (newGames) =>{
    if(newGames[0] != "" && 
    newGames[0] === newGames[1] && 
    newGames[0] === newGames[2]){
      return true
    }
    if(newGames[3] != "" && 
    newGames[3] === newGames[4] && 
    newGames[3] === newGames[5]){
      return true
    }
    if(newGames[6] != "" && 
    newGames[6] === newGames[7] && 
    newGames[6] === newGames[8]){
      return true
    }

    if(newGames[0] != "" && 
    newGames[0] === newGames[3] && 
    newGames[0] === newGames[6]){
      return true
    }
    if(newGames[1] != "" && 
    newGames[1] === newGames[4] && 
    newGames[1] === newGames[7]){
      return true
    }
    if(newGames[2] != "" && 
    newGames[2] === newGames[5] && 
    newGames[2] === newGames[8]){
      return true
    }

    if(newGames[0] != "" && 
    newGames[0] === newGames[4] && 
    newGames[0] === newGames[8]){
      return true
    }
    if(newGames[2] != "" && 
    newGames[2] === newGames[4] && 
    newGames[2] === newGames[6]){
      return true
    }

    return false
  }


  function isMoveFinish(newGames){
    for (let i = 0; i < newGames.length; i++) {
      const element = newGames[i];
      if (element === "") {
        return false
      }
    }

    return true
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
