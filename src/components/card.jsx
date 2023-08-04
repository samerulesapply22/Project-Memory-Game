export default function Card({ card, handleClick }) {
  return (
    <div className={"card " + card.status} onClick={() => handleClick(card)}>
      <img src={card.img} />
    </div>
  );
}
