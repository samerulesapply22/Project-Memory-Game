import { useState } from "react";
const cardsArray = [
  { id: 1, img: "src/components/assets/happyFace.png", status: "back" },
  { id: 1, img: "src/components/assets/happyFace.png", status: "back" },
  { id: 2, img: "src/components/assets/horse.png", status: "back" },
  { id: 2, img: "src/components/assets/horse.png", status: "back" },
  { id: 3, img: "src/components/assets/redStar.png", status: "back" },
  { id: 3, img: "src/components/assets/redStar.png", status: "back" },
  { id: 4, img: "src/components/assets/treeStars.png", status: "back" },
  { id: 4, img: "src/components/assets/treeStars.png", status: "back" },
  { id: 5, img: "src/components/assets/triangle.png", status: "back" },
  { id: 5, img: "src/components/assets/triangle.png", status: "back" },
  { id: 6, img: "src/components/assets/triangleRectangle.png", status: "back" },
  { id: 6, img: "src/components/assets/triangleRectangle.png", status: "back" },
  { id: 7, img: "src/components/assets/twoStars.png", status: "back" },
  { id: 7, img: "src/components/assets/twoStars.png", status: "back" },
  { id: 8, img: "src/components/assets/yellowStar.png", status: "back" },
  { id: 8, img: "src/components/assets/yellowStar.png", status: "back" },
]; //.sort(() => Math.random() - 0.5);

export default function Cards() {
  const [cards, setCards] = useState(cardsArray);
  const [prev, setPrev] = useState(-1);
  const [isGame, setIsGame] = useState("yes");

  function matched(index) {
    if (cardsArray[index].id === cardsArray[prev].id) {
      cardsArray[prev].status = "correct";
      cardsArray[index].status = "correct";
      setCards([...cards]);
      setTimeout(() => {
        cardsArray[prev].status = "out";
        cardsArray[index].status = "out";
        setCards([...cards]);
        over();
      }, 500);
    } else {
      cardsArray[prev].status = "incorrect";
      cardsArray[index].status = "incorrect";
      setCards([...cards]);
      setTimeout(() => {
        cardsArray[prev].status = "back";
        cardsArray[index].status = "back";
        setCards([...cards]);
      }, 500);
    }
    setPrev(-1);
  }

  function over() {
    if (cardsArray.every((card) => card.status === "out")) setIsGame("over");
  }

  function handleClick(index) {
    cardsArray[index].status = "active";
    setCards([...cards]);
    if (prev === -1) setPrev(index);
    else matched(index);
  }

  const cardsArrayDisplay = cardsArray.map((card, index) => {
    return (
      <div
        key={index}
        className={"card " + card.status}
        onClick={() => handleClick(index)}
      >
        <img src={card.img} />
      </div>
    );
  });

  const game = () => {
    setIsGame("yes");
  };

  if (isGame == "yes")
    return (
      <>
        <h1>Jeu de mémoire</h1>
        <div id="container">{cardsArrayDisplay}</div>{" "}
      </>
    );
  else if (isGame === "no")
    return (
      <div class='game'>
        <h1>Jeu de mémoire</h1>
        <button id="newGame" onClick={game}>
          Nouveau Jeu
        </button>
      </div>
    );
  else if (isGame === "over")
    return (
      <div class='game'>
        <h2>Fin du jeu. Vous gagnez!</h2>
        <button id="newGame" onClick={game}>
          Nouveau Jeu
        </button>
      </div>
    );
}
