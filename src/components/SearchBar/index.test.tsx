import { fireEvent, render, screen } from '@testing-library/react';
import SearchBar from '.';

describe('search bar', () => {
  it('should render search bar', () => {
    render(<SearchBar />);
    const input = screen.getByPlaceholderText(/enter text/i);
    expect(input).toBeInTheDocument();
  });
  it('should be able to write search request', () => {
    render(<SearchBar />);
    const input: HTMLInputElement = screen.getByPlaceholderText(/enter text/i);
    const testValue = 'search';

    fireEvent.change(input, { target: { value: testValue } });
    expect(input.value).toBe(testValue);
  });
  it('should be able to write search request to localStorage', () => {
    const { unmount } = render(<SearchBar />);
    const input: HTMLInputElement = screen.getByPlaceholderText(/enter text/i);
    const testValue = 'search';

    fireEvent.change(input, { target: { value: testValue } });
    unmount();
    const localStorageValue = localStorage.getItem('INPUT_VALUE');
    expect(localStorageValue).toBe(testValue);
  });
  it('input should take value from localStorage', () => {
    const testValue = 'search';
    localStorage.setItem('INPUT_VALUE', 'search');
    render(<SearchBar />);
    const input: HTMLInputElement = screen.getByPlaceholderText(/enter text/i);
    expect(input.value).toBe(testValue);
  });
  it('component lifecycle', () => {
    const { unmount } = render(<SearchBar />);
    const input: HTMLInputElement = screen.getByPlaceholderText(/enter text/i);
    const testValue = 'search';

    fireEvent.change(input, { target: { value: testValue } });

    const localStorageValue = localStorage.getItem('INPUT_VALUE');

    expect(input.value).toBe(testValue);
    expect(localStorageValue).toBe(testValue);

    unmount();
    render(<SearchBar />);
    const inputAfterRender: HTMLInputElement = screen.getByPlaceholderText(/enter text/i);
    expect(inputAfterRender.value).toBe(testValue);
  });
});
