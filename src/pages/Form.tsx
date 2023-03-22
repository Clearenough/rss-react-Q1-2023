import { IFormCard } from './../@types/common';
import React, { createRef, RefObject } from 'react';

interface IMyFormState {
  isTextFilled: boolean;
  isDateChoosed: boolean;
  isImageChoosed: boolean;
}

class MyForm extends React.Component<unknown, IMyFormState> {
  state: IMyFormState = {
    isTextFilled: false,
    isDateChoosed: false,
    isImageChoosed: false,
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
    if (files) {
      image = files[0];

      const infoForCard: IFormCard = {
        text: this.inputTextRef.current?.value,
        date: this.inputDateRef.current?.value,
        select: this.selectRef.current?.value,
        leaveHim: this.inputCheckboxRef.current?.checked,
        isRadioTurned: this.inputRadioRef.current?.checked,
        imageUrl: image ? this.getImageUrl(image) : undefined,
      };
      console.log(infoForCard);
    }
  };

  getImageUrl = (image: File): string => {
    return URL.createObjectURL(image);
  };

  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <input type="text" name="text" ref={this.inputTextRef} />
        <label htmlFor="text">Type something</label>
        <input type="date" name="date" ref={this.inputDateRef} />
        <label htmlFor="date">pick a random date</label>
        <select name="select" ref={this.selectRef}>
          <option value="Yes">Yes</option>
          <option value="No">No</option>
        </select>
        <label htmlFor="select">Yes or No, what would you choose?</label>
        <input type="checkbox" name="checkbox" ref={this.inputCheckboxRef} />
        <label htmlFor="checkbox">leave him alone he doesnt want to be disturbed</label>
        <input type="radio" name="radio" ref={this.inputRadioRef} />
        <label htmlFor="radio">turn on the radio</label>
        <input type="file" name="file" accept="image/jpeg,image/png" ref={this.inputFileRef} />
        <label htmlFor="file">pick photo</label>
        <button type="submit">Create Card</button>
      </form>
    );
  }
}

export default MyForm;
