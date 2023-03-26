import { render, screen } from '@testing-library/react';
import { IFormCard } from './../../@types/common';
import FormCards from '.';

const cardsArray: IFormCard[] = [
  {
    text: 'undefined',
    date: 'undefined',
    select: 'undefined',
    leaveHim: false,
    isRadioTurned: false,
    imageUrl: 'undefined',
  },
  {
    text: 'undefined',
    date: 'undefined',
    select: 'undefined',
    leaveHim: false,
    isRadioTurned: false,
    imageUrl: 'undefined',
  },
];

describe('Cards List', () => {
  it('should render empty list of cards', () => {
    render(<FormCards cards={[]} />);
    const cardsList = screen.queryAllByRole('card');
    expect(cardsList.length).toBe(0);
  });
  it('should render list of cards', () => {
    render(<FormCards cards={cardsArray} />);
    const cardsList = screen.getAllByRole('card');
    expect(cardsList.length).toBe(cardsArray.length);
  });
});
