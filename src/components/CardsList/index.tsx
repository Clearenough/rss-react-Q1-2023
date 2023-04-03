import Card from './../Card.tsx';
import cardsInfo from './../../assets/cardsInfo.json';
import styles from './index.module.scss';
import { ICharacterCard } from '../../@types/common';

// interface ICard {
//   imageUrl: string;
//   name: string;
//   price: number;
//   id: number;
// }

interface IProps {
  cards: ICharacterCard[];
}

function CardsList({ cards }: IProps) {
  console.log(cards, 'cards');
  return (
    <div className={styles.cards}>
      {cards.map((card) => {
        return <Card {...card} key={card.id} />;
      })}
    </div>
  );
}

export default CardsList;
