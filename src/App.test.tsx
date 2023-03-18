import { render, screen } from '@testing-library/react';
import App from './App';

describe('App', () => {
  it('should have search bar', () => {
    render(<App />);
    const input = screen.getByPlaceholderText('enter text');
    expect(input).toBeInTheDocument();
  });
});
