import { useEffect, useState } from "react";

export default function Cards() {
  const cardsArray = [
    { id: 1, img: "src/cards/happyFace.png", status: "back" },
    { id: 2, img: "src/cards/happyFace.png", status: "back" },
    { id: 3, img: "src/cards/horse.png", status: "back" },
    { id: 4, img: "src/cards/horse.png", status: "back" },
    { id: 5, img: "src/cards/redStar.png", status: "back" },
    { id: 6, img: "src/cards/redStar.png", status: "back" },
    { id: 7, img: "src/cards/treeStars.png", status: "back" },
    { id: 8, img: "src/cards/treeStars.png", status: "back" },
    { id: 9, img: "src/cards/triangle.png", status: "back" },
    { id: 10, img: "src/cards/triangle.png", status: "back" },
    {
      id: 11,
      img: "src/cards/triangleRectangle.png",
      status: "back",
    },
    {
      id: 12,
      img: "src/cards/triangleRectangle.png",
      status: "back",
    },
    { id: 13, img: "src/cards/twoStars.png", status: "back" },
    { id: 14, img: "src/cards/twoStars.png", status: "back" },
    { id: 15, img: "src/cards/yellowStar.png", status: "back" },
    { id: 16, img: "src/cards/yellowStar.png", status: "back" },
  ];

  const [prev, setPrev] = useState(false);
  const [deck, setDeck] = useState(shuffle(cardsArray));
  const [flips, setFlips] = useState(0);
  const [points, setPoints] = useState(0);
  const [seconds, setSeconds] = useState(0);

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
    if (deck.every((card) => card.status === "correct")) {
      return (
        <>
          <style>
            {
              ".btnNewGame { border-color: rgb(242, 231, 78); } body { background-color: rgb(242, 231, 78); } "
            }
          </style>
          <h1>Гра закінчена!</h1>
        </>
      );
    } else return <h1>Балів: {points}</h1>;
  }

  useEffect(() => {
    if (deck.every((card) => card.status === "correct"))
      return setSeconds(seconds);
    let counter = setTimeout(() => {
      setSeconds(seconds + 1);
    }, 1000);
    return () => clearTimeout(counter);
  }, [seconds]);

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
          <div id="info">
            <div id="flips">Ходів: {flips}</div>
            <div id="time">Час: {seconds}</div>
          </div>
          <button
            className="btnNewGame"
            onClick={() => {
              setDeck(shuffle(cardsArray));
              setFlips(0);
              setPoints(0);
              setSeconds(0);
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
