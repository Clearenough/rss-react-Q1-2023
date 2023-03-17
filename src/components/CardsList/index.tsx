import Card from './../Card.tsx';
import cardsInfo from './../../assets/cardsInfo.json';
import styles from './index.module.scss';

interface ICard {
  imageUrl: string;
  name: string;
  price: number;
  id: number;
}

function CardsList() {
  const cardsInfoParce: ICard[] = JSON.parse(JSON.stringify(cardsInfo));

  return (
    <div className={styles.cards}>
      {cardsInfoParce.map((card) => {
        const { imageUrl, name, price, id } = card;
        return <Card imageUrl={imageUrl} name={name} price={price} key={id} />;
      })}
    </div>
  );
}

export default CardsList;
