import { ICharacterCard } from '../../@types/common';
import styles from './index.module.scss';

interface IProps extends ICharacterCard {
  handler: (value: boolean) => void;
}

function CardModal({ gender, location, name, species, status, image, handler }: IProps) {
  function onClickHandler(e: React.MouseEvent<HTMLElement>) {
    e.stopPropagation();
    e.preventDefault();
    handler(false);
  }

  return (
    <div
      className={styles.modal}
      onClick={(e) => {
        onClickHandler(e);
      }}
      role="model"
    >
      <div className={styles.card} onClick={(e) => e.stopPropagation()}>
        <button className={styles.close} onClick={(e) => onClickHandler(e)}></button>
        <img src={image} alt={name + 'image'} />
        <div className={styles.description}>
          <span role="model-name">{name}</span>
          <span role="model-species">{species}</span>
          <span role="model-gender">{gender}</span>
          <span role="model-location">{location.name}</span>
          <span role="model-status">{status}</span>
        </div>
      </div>
    </div>
  );
}

export default CardModal;
