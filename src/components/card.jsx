const Card = ({card}) => {
  return <div className="card" >
     <img src={card.img} alt={card.id} />
   </div>;
};

export default Card;
