import Card from './../Card.tsx';
import cardsInfo from './../../assets/cardsInfo.json';

interface ICard {
  imageUrl: string;
  name: string;
  price: number;
  id: number;
}

function CardsList() {
  const cardsInfoParce: ICard[] = JSON.parse(JSON.stringify(cardsInfo));

  return (
    <>
      {cardsInfoParce.map((card) => {
        const { imageUrl, name, price, id } = card;
        return <Card imageUrl={imageUrl} name={name} price={price} key={id} />;
      })}
    </>
  );
}

export default CardsList;
