import { useState } from 'react';
import styles from './index.module.scss';

interface IProps {
  imageUrl: string;
  name: string;
  price: number;
}

function Card({ imageUrl, name, price }: IProps) {
  const [count, setCount] = useState(0);

  return (
    <div className={styles.card} role="card">
      <img src={imageUrl} alt="" className={styles.image} />
      <div className={styles.description}>
        <span>{name}</span>
        <span role="price">total price: {count * price}</span>
      </div>
      <div className={styles.counter}>
        <button className={styles.button} onClick={() => setCount(count - 1)} role="decrease">
          -
        </button>
        <span>{count}</span>
        <button className={styles.button} onClick={() => setCount(count + 1)} role="increase">
          +
        </button>
      </div>
    </div>
  );
}

export default Card;
