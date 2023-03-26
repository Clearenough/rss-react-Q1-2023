import { render, screen } from '@testing-library/react';
import cardsInfo from './../../assets/cardsInfo.json';
import CardsList from '.';

describe('Cards List', () => {
  it('should render list of cards', () => {
    render(<CardsList />);
    const cardsList = screen.getAllByRole('card');
    expect(cardsList.length).toBe(cardsInfo.length);
  });
});
