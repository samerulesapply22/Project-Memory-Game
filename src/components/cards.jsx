import { useState } from "react";
import Card from "./card";

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
      if (card.img === prev.img) {
        newStatus("correct", prev, card);
      } else {
        newStatus("incorrect", prev, card);
        setTimeout(() => {
          newStatus("back", prev, card);
        }, 600);
      }
      setPrev(false);
    }
  }

  return deck.map((card, index) => {
    return (
      <Card key={index} card={card} handleClick={() => handleClick(card)} />
    );
  });
}
