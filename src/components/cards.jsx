import { useState } from "react";
//import Card from "./card";

const cardsArray = [
  { id: 1, img: "src/components/assets/happyFace.png", stat: "" },
  { id: 1, img: "src/components/assets/happyFace.png", stat: "" },
  { id: 2, img: "src/components/assets/horse.png", stat: "" },
  { id: 2, img: "src/components/assets/horse.png", stat: "" },
  { id: 3, img: "src/components/assets/redStar.png", stat: "" },
  { id: 3, img: "src/components/assets/redStar.png", stat: "" },
  { id: 4, img: "src/components/assets/treeStars.png", stat: "" },
  { id: 4, img: "src/components/assets/treeStars.png", stat: "" },
  { id: 5, img: "src/components/assets/triangle.png", stat: "" },
  { id: 5, img: "src/components/assets/triangle.png", stat: "" },
  { id: 6, img: "src/components/assets/triangleRectangle.png", stat: "" },
  { id: 6, img: "src/components/assets/triangleRectangle.png", stat: "" },
  { id: 7, img: "src/components/assets/twoStars.png", stat: "" },
  { id: 7, img: "src/components/assets/twoStars.png", stat: "" },
  { id: 8, img: "src/components/assets/yellowStar.png", stat: "" },
  { id: 8, img: "src/components/assets/yellowStar.png", stat: "" },
];

const cardsArrayDisplay = cardsArray.map((card, index) => {
  return (
    <div key={index} className="card">
      <img src={card.img}/>
    </div>
  );
});

const Cards = () => {
  const [card, setCard] = useState(cardsArray);
  return <div id="container">{cardsArrayDisplay}</div>;
};

export default Cards;
