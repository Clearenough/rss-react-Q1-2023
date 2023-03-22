import { IFormCard } from './../../@types/common';
import styles from './index.module.scss';

function FormCard({ text, date, select, leaveHim, isRadioTurned, imageUrl }: IFormCard) {
  return (
    <div className={styles.card} role="card">
      <img src={imageUrl} alt="" className={styles.image} />
      <div className={styles.description}>
        <span>{text}</span>
        <span role="price">{date}</span>
      </div>
      <div>{select}</div>
      <div>{leaveHim}</div>
      <div>{isRadioTurned}</div>
    </div>
  );
}
export default FormCard;
