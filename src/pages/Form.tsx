import { IFormCard } from './../@types/common';
import React, { createRef, RefObject } from 'react';
import FormCards from './../components/FormCards';
import styles from './Form.module.scss';

interface IMyFormState {
  isTextFilled: boolean;
  isDateChoosed: boolean;
  isImageChoosed: boolean;
  cards: IFormCard[];
}

class MyForm extends React.Component<unknown, IMyFormState> {
  state: IMyFormState = {
    isTextFilled: true,
    isDateChoosed: true,
    isImageChoosed: true,
    cards: [],
  };

  inputTextRef: RefObject<HTMLInputElement> = createRef();
  inputDateRef: RefObject<HTMLInputElement> = createRef();
  selectRef: RefObject<HTMLSelectElement> = createRef();
  inputCheckboxRef: RefObject<HTMLInputElement> = createRef();
  inputRadioRef: RefObject<HTMLInputElement> = createRef();
  inputFileRef: RefObject<HTMLInputElement> = createRef();

  onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    let image: File;
    const files = this.inputFileRef.current?.files;
    const inputText = this.inputTextRef.current?.value;
    const inputDate = this.inputDateRef.current?.value;
    const select = this.selectRef.current!.value;
    const inputCheckbox = this.inputCheckboxRef.current!.checked;
    const inputRadio = this.inputRadioRef.current!.checked;

    this.setState({
      isTextFilled: inputText ? true : false,
      isDateChoosed: inputDate ? true : false,
      isImageChoosed: files?.length ? true : false,
    });

    if (files?.length && inputText && inputDate) {
      image = files[0];
      const infoForCard: IFormCard = {
        text: inputText,
        date: inputDate,
        select: select,
        leaveHim: inputCheckbox,
        isRadioTurned: inputRadio,
        imageUrl: this.getImageUrl(image),
      };
      this.addCard(infoForCard);
    }
  };

  getImageUrl = (image: File): string => {
    return URL.createObjectURL(image);
  };

  addCard = (card: IFormCard) => {
    const newCardsArray: IFormCard[] = [...this.state.cards];
    newCardsArray.push(card);
    this.setState({ cards: newCardsArray });
  };

  render() {
    return (
      <div>
        <form className={styles.form} onSubmit={this.onSubmit}>
          <div className={styles.inputLayout}>
            <label htmlFor="text">Type something: </label>
            <input
              className={styles.inputWithField}
              type="text"
              name="text"
              id="text"
              ref={this.inputTextRef}
            />
            {!this.state.isTextFilled && <span className={styles.error}>Error</span>}
          </div>

          <div className={styles.inputLayout}>
            <label htmlFor="date">pick a random date</label>
            <input
              className={styles.inputWithField}
              type="date"
              name="date"
              id="date"
              ref={this.inputDateRef}
            />

            {!this.state.isDateChoosed && <span className={styles.error}>Error</span>}
          </div>

          <div className={styles.inputLayout}>
            <label htmlFor="select">Yes or No, what would you choose?</label>
            <select
              className={styles.inputWithField}
              name="select"
              id="select"
              ref={this.selectRef}
            >
              <option value="Yes">Yes</option>
              <option value="No">No</option>
            </select>
          </div>

          <div className={styles.inputLayout}>
            <label htmlFor="checkbox">leave him alone he doesnt want to be disturbed</label>
            <input
              className={styles.clickableField}
              type="checkbox"
              name="checkbox"
              id="checkbox"
              ref={this.inputCheckboxRef}
            />
          </div>

          <div className={styles.inputLayout}>
            <label htmlFor="radio">turn on the radio</label>
            <input
              className={styles.clickableField}
              type="radio"
              name="radio"
              id="radio"
              ref={this.inputRadioRef}
            />
          </div>

          <div className={styles.inputLayout}>
            <label className={styles.photoLable} htmlFor="file">
              pick photo
            </label>
            <input
              className={styles.invisible}
              type="file"
              name="file"
              id="file"
              accept="image/jpeg,image/png"
              ref={this.inputFileRef}
            />
            {!this.state.isImageChoosed && <span className={styles.error}>Error</span>}
          </div>

          <button className={styles.submit} type="submit">
            Create Card
          </button>
        </form>
        <FormCards cards={this.state.cards} />
      </div>
    );
  }
}

export default MyForm;
