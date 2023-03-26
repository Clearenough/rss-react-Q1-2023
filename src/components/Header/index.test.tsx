import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Header from '.';

describe('Header', () => {
  it('should render header', () => {
    render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    );
    const links = screen.getAllByRole('link');
    expect(links.length).toBe(3);
  });
});
