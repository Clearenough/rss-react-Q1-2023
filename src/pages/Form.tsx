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
    const inputText = this.inputTextRef.current?.value;
    const inputDate = this.inputDateRef.current?.value;
    const select = this.selectRef.current!.value;
    const inputCheckbox = this.inputRadioRef.current!.value as unknown as boolean;
    const inputRadio = this.inputFileRef.current!.value as unknown as boolean;

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
        {!this.state.isTextFilled && <span>Error</span>}
        <input type="date" name="date" ref={this.inputDateRef} />
        <label htmlFor="date">pick a random date</label>
        {!this.state.isDateChoosed && <span>Error</span>}
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
        {!this.state.isImageChoosed && <span>Error</span>}
        <button type="submit">Create Card</button>
      </form>
    );
  }
}

export default MyForm;
