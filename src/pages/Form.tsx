import { IFormCard } from './../@types/common';
import React, { createRef, RefObject } from 'react';
import FormCards from './../components/FormCards';
import styles from './Form.module.scss';
import ConfirmationMessage from './../components/ConfirmationMessage';

interface IMyFormState {
  isTextFilled: boolean;
  isDateChoosed: boolean;
  isImageChoosed: boolean;
  cards: IFormCard[];
  isConfirmation: boolean;
}

class MyForm extends React.Component<unknown, IMyFormState> {
  state: IMyFormState = {
    isTextFilled: true,
    isDateChoosed: true,
    isImageChoosed: true,
    cards: [],
    isConfirmation: false,
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
      this.setState({ isConfirmation: true });
      setTimeout(() => this.setState({ isConfirmation: false }), 500);
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
        <form className={styles.form} onSubmit={this.onSubmit} role="form">
          <div className={styles.inputLayout}>
            <label htmlFor="text">Type something: </label>
            <input
              className={styles.inputWithField}
              type="text"
              name="text"
              id="text"
              ref={this.inputTextRef}
              role="text-input"
            />
            {!this.state.isTextFilled && (
              <span className={styles.error} role="text-error">
                Error
              </span>
            )}
          </div>

          <div className={styles.inputLayout}>
            <label htmlFor="date">pick a random date</label>
            <input
              className={styles.inputWithField}
              type="date"
              name="date"
              id="date"
              ref={this.inputDateRef}
              role="date-input"
            />

            {!this.state.isDateChoosed && (
              <span className={styles.error} role="date-error">
                Error
              </span>
            )}
          </div>

          <div className={styles.inputLayout}>
            <label htmlFor="select">Yes or No, what would you choose?</label>
            <select
              className={styles.inputWithField}
              name="select"
              id="select"
              ref={this.selectRef}
              role="select"
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
              role="checkbox"
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
              role="radio-input"
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
              role="file-input"
            />
            {!this.state.isImageChoosed && (
              <span className={styles.error} role="file-error">
                Error
              </span>
            )}
          </div>

          <button className={styles.submit} type="submit" role="submit">
            Create Card
          </button>
        </form>
        <FormCards cards={this.state.cards} />
        {this.state.isConfirmation && <ConfirmationMessage />}
      </div>
    );
  }
}

export default MyForm;
