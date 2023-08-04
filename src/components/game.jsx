import { useState } from "react";
import Cards from "./cards";

export default function Game() {
  const [isGame, setIsGame] = useState("yes");
  const game = () => {
    setIsGame("yes");
  };

  if (isGame == "yes")
    return (
      <>
        <h1>Jeu de mémoire</h1>
        <div id="container"><Cards /></div>
      </>
    );
  else if (isGame === "no")
    return (
      <div class="game">
        <h1>Jeu de mémoire</h1>
        <button id="newGame" onClick={game}>
          Nouveau Jeu
        </button>
      </div>
    );
  else if (isGame === "over")
    return (
      <div class="game">
        <h2>Fin du jeu. Vous gagnez!</h2>
        <button id="newGame" onClick={game}>
          Nouveau Jeu
        </button>
      </div>
    );
}
