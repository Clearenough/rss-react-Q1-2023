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
      <div>{leaveHim ? 'he is annoyed' : 'he is calm'}</div>
      <div>{isRadioTurned ? 'radio on' : 'radio off'}</div>
    </div>
  );
}
export default FormCard;
