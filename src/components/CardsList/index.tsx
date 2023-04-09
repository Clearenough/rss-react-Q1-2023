import Card from './../Card.tsx';
import styles from './index.module.scss';
import { ICharacterCard } from '../../@types/common';

interface IProps {
  cards: ICharacterCard[];
  error: string;
}

function CardsList({ cards, error }: IProps) {
  console.log(cards, 'cards');
  return (
    <div className={styles.cards}>
      {cards.map((card) => {
        return <Card {...card} key={card.id} />;
      })}
      {error && <div className={styles.error}>Error: {error}</div>}
    </div>
  );
}

export default CardsList;
