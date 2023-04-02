import { IFormCard, IFormData } from './../@types/common';
import React, { useRef, useState } from 'react';
import FormCards from './../components/FormCards';
import styles from './Form.module.scss';
import ConfirmationMessage from './../components/ConfirmationMessage';
import { useForm } from 'react-hook-form';

function MyForm() {
  const [isConfirmation] = useState(false);
  const [cards, addCard] = useState<IFormCard[]>([]);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormData>({ mode: 'onSubmit', reValidateMode: 'onSubmit' });
  const { onChange, ref } = register('imageUrl');
  const fileRef = useRef<HTMLInputElement>();

  const onSubmit = (formData: IFormData) => {
    console.log(formData);
    const infoForCard: IFormCard = {
      text: formData.text,
      date: formData.date,
      select: formData.select,
      leaveHim: formData.leaveHim,
      isRadioTurned: formData.radio,
      imageUrl: '',
    };
    if (fileRef.current && fileRef.current.files) {
      if (fileRef.current.files.length > 0) {
        infoForCard.imageUrl = getImageUrl(fileRef.current.files[0]);
      }
    }
    addCard([...cards, infoForCard]);
  };

  const getImageUrl = (image: File): string => {
    return URL.createObjectURL(image);
  };

  return (
    <div>
      <form className={styles.form} onSubmit={handleSubmit(onSubmit)} role="form">
        <div className={styles.inputLayout}>
          <label htmlFor="text">Type something: </label>
          <input
            {...register('text', { required: true })}
            className={styles.inputWithField}
            type="text"
            name="text"
            id="text"
            role="text-input"
          />
          {errors.text && (
            <span className={styles.error} role="text-error">
              Error
            </span>
          )}
        </div>

        <div className={styles.inputLayout}>
          <label htmlFor="date">pick a random date</label>
          <input
            {...register('date', { required: true })}
            className={styles.inputWithField}
            type="date"
            name="date"
            id="date"
            role="date-input"
          />

          {errors.date && (
            <span className={styles.error} role="date-error">
              Error
            </span>
          )}
        </div>

        <div className={styles.inputLayout}>
          <label htmlFor="select">Yes or No, what would you choose?</label>
          <select
            {...register('select')}
            className={styles.inputWithField}
            name="select"
            id="select"
            role="select"
          >
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </select>
        </div>

        <div className={styles.inputLayout}>
          <label htmlFor="checkbox">leave him alone he doesnt want to be disturbed</label>
          <input
            {...register('leaveHim')}
            className={styles.clickableField}
            type="checkbox"
            name="checkbox"
            id="checkbox"
            role="checkbox"
          />
        </div>

        <div className={styles.inputLayout}>
          <label htmlFor="radio">radio</label>
          <input
            {...register('radio')}
            className={styles.clickableField}
            type="radio"
            value="radioOn"
            name="radio"
            id="radio"
            role="radio-input"
          />
        </div>

        <div className={styles.inputLayout}>
          <label className={styles.photoLable} htmlFor="file">
            pick photo
          </label>
          <input
            ref={(input) => {
              ref(input);
              if (input) {
                fileRef.current = input;
              }
            }}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              console.log(fileRef.current?.files);
              onChange(e);
            }}
            className={styles.invisible}
            type="file"
            id="file"
            accept=".jpg, .jpeg, .png"
            role="file-input"
          />
          {errors.imageUrl && (
            <span className={styles.error} role="file-error">
              Error
            </span>
          )}
        </div>

        <button className={styles.submit} type="submit" role="submit">
          Create Card
        </button>
      </form>
      <FormCards cards={cards} />
      {isConfirmation && <ConfirmationMessage />}
    </div>
  );
}
export default MyForm;
