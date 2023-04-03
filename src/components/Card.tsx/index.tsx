import { ICharacterCard } from '../../@types/common';
import { useState } from 'react';
import styles from './index.module.scss';

// interface IProps {
//   imageUrl: string;
//   name: string;
//   price: number;
// }

function Card({ gender, location, name, species, status }: ICharacterCard) {
  const [count, setCount] = useState(0);

  return (
    <div className={styles.card} role="card">
      <div className={styles.description}>
        <span role="name">{name}</span>
        <span role="species">{species}</span>
        <span role="gender">{gender}</span>
      </div>
      <div className={styles.counter}>
        <span role="location">{location.name}</span>
        <span role="status">{status}</span>
      </div>
    </div>
  );
}

export default Card;
