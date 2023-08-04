import { useState } from "react";

export default function Cards() {
  const cardsArray = [
    { id: 1, img: "src/components/assets/happyFace.png", status: "back" },
    { id: 2, img: "src/components/assets/happyFace.png", status: "back" },
    { id: 3, img: "src/components/assets/horse.png", status: "back" },
    { id: 4, img: "src/components/assets/horse.png", status: "back" },
    { id: 5, img: "src/components/assets/redStar.png", status: "back" },
    { id: 6, img: "src/components/assets/redStar.png", status: "back" },
    { id: 7, img: "src/components/assets/treeStars.png", status: "back" },
    { id: 8, img: "src/components/assets/treeStars.png", status: "back" },
    { id: 9, img: "src/components/assets/triangle.png", status: "back" },
    { id: 10, img: "src/components/assets/triangle.png", status: "back" },
    {
      id: 11,
      img: "src/components/assets/triangleRectangle.png",
      status: "back",
    },
    {
      id: 12,
      img: "src/components/assets/triangleRectangle.png",
      status: "back",
    },
    { id: 13, img: "src/components/assets/twoStars.png", status: "back" },
    { id: 14, img: "src/components/assets/twoStars.png", status: "back" },
    { id: 15, img: "src/components/assets/yellowStar.png", status: "back" },
    { id: 16, img: "src/components/assets/yellowStar.png", status: "back" },
  ];
  const [prev, setPrev] = useState(false);
  const [deck, setDeck] = useState(shuffle(cardsArray));
  const [flips, setFlips] = useState(0);
  const [points, setPoints] = useState(0);

  function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }
  function newStatus(status, ...cards) {
    cards.forEach((card) => (card.status = status));
    setDeck([...deck]);
  }

  function handleClick(card) {
    if (card.status === "back") {
      newStatus("active", card);
      match(card);
    }
  }

  function match(card) {
    if (!prev) {
      setPrev(card);
      return;
    }
    if (card.id !== prev.id) {
      setFlips(flips + 1);
      if (card.img === prev.img) {
        newStatus("correct", prev, card);
        setPoints(points + 100);
      } else {
        newStatus("incorrect", prev, card);
        setTimeout(() => {
          newStatus("back", prev, card);
        }, 800);
      }
      setPrev(false);
    }
  }

  function Placeholder() {
    if (deck.every((card) => card.status === "correct"))
      return <h1>Гра закінчена!</h1>;
    else return <h1>Балів: {points}</h1>;
  }

  const cards = deck.map((card, index) => {
    return (
      <div
        key={index}
        className={"card " + card.status}
        onClick={() => handleClick(card)}
      >
        <img src={card.img} />
      </div>
    );
  });

  return (
    <>
      <h1 id="title">Гра в пам'ять</h1>
      <div id="header">
        <Placeholder />
        <div id="gameInfo">
          <div id="flips">Ходів: {flips}</div>
          <button
            className="btnNewGame"
            onClick={() => {
              setDeck(shuffle(cardsArray));
              setFlips(0);
              setPoints(0);
            }}
          >
            Нова гра
          </button>
        </div>
      </div>
      <div id="container">{cards}</div>
    </>
  );
}
