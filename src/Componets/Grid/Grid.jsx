import Card from "../Card/Card";
import { useState } from "react";
import "./Grid.css";
import isWinner from "../../Helpers/ChekWinner";

function Grid({ numberOfCards }) {
  const [board, setboard] = useState(Array(numberOfCards).fill(""));
  const [turn, setturn] = useState(true); // true : O, False : X
  const [winner, setwinner] = useState(null);

  function play(index) {
    if (turn == true) {
      board[index] = "o";
    } else {
      board[index] = "x";
    }
    const win = isWinner(board, turn ? "o" : "x");
    if (win) {
      setwinner(win);
    }
    setboard([...board]);
    setturn(!turn);
  }

  function reset(){
    setturn(true);
    setwinner(null)
    setboard(Array(numberOfCards).fill(""))
  }


  return (
    <div className="grid-wrapper">
      
      <h1 className="turn-highlight">Curren turn: {(turn) ? "o" : "x"}</h1>
      <div className="Grid">
        {board.map((el, idx) => (
          <Card gameEnd= {winner ? true : false} player={el} key={idx} onPlay={play} index={idx} />
        ))}
      </div>

      {winner && (
        <>
          <h1 className="turn-highlight">Winner is {winner}</h1>
          <button className="reset" onClick={reset}> Reset Game</button>
        </>
      )}
    </div>
  );
}

export default Grid;
