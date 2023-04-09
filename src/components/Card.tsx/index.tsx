import { ICharacterCard } from '../../@types/common';
import { useState } from 'react';
import styles from './index.module.scss';
import CardModal from './../CardModal';

// interface IProps {
//   imageUrl: string;
//   name: string;
//   price: number;
// }

function Card(card: ICharacterCard) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div
      className={styles.card}
      role="card"
      onClick={(e) => {
        e.stopPropagation();
        setIsModalOpen(true);
      }}
    >
      <img src={card.image} alt={card.name + 'image'} className={styles.image} />
      <div className={styles.description}>
        <span role="name">{card.name}</span>
      </div>
      {isModalOpen && <CardModal {...card} handler={setIsModalOpen} />}
    </div>
  );
}

export default Card;
