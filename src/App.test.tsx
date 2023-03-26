import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

describe('App', () => {
  it('should have search bar', () => {
    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );
    const input = screen.getByPlaceholderText('enter text');
    expect(input).toBeInTheDocument();
  });
});
