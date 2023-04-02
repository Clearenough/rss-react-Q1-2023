import { fireEvent, render, screen } from '@testing-library/react';
import Card from '.';

describe('card', () => {
  it('should render  card', () => {
    render(<Card imageUrl={''} name={''} price={10} />);
    const card = screen.getByRole('card');
    expect(card).toBeInTheDocument();
  });
  it('should increase price', () => {
    render(<Card imageUrl={''} name={''} price={10} />);
    const increaseButton = screen.getByRole('increase');
    fireEvent.click(increaseButton);

    const priceSpan = screen.getByRole('price');
    const priceArray = priceSpan.innerHTML.split(' ');
    const price = priceArray[priceArray.length - 1];
    expect(price).toBe('10');
  });
  it('should decrease price', () => {
    render(<Card imageUrl={''} name={''} price={10} />);
    const decreaseButton = screen.getByRole('decrease');
    fireEvent.click(decreaseButton);

    const priceSpan = screen.getByRole('price');
    const priceArray = priceSpan.innerHTML.split(' ');
    const price = priceArray[priceArray.length - 1];
    expect(price).toBe('-10');
  });
});
