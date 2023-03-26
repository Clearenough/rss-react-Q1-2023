import { fireEvent, render, screen } from '@testing-library/react';
import MyForm from './Form';

describe('Form', () => {
  it('should render form', () => {
    render(<MyForm />);

    const form = screen.getByRole('form');
    expect(form).toBeInTheDocument();
  });
  it('should give an error message if text input is empty', () => {
    render(<MyForm />);

    const submitButton = screen.getByRole('submit');
    fireEvent.click(submitButton);

    const error = screen.queryByRole('text-error');
    expect(error).toBeInTheDocument();
  });
  it('error message should not appear id text input is not empty', () => {
    const testValue = 'testValue';

    render(<MyForm />);

    const input = screen.getByRole('text-input');
    fireEvent.change(input, { target: { value: testValue } });

    const submitButton = screen.getByRole('submit');
    fireEvent.click(submitButton);

    const error = screen.queryByRole('text-error');
    expect(error).toBe(null);
  });
  it('should give an error message if date is not selected', () => {
    render(<MyForm />);
    const submitButton = screen.getByRole('submit');
    fireEvent.click(submitButton);
    const error = screen.queryByRole('date-error');
    expect(error).toBeInTheDocument();
  });
  it('error message should not appear if date input is not empty', async () => {
    const testValue = '2023-03-11';

    render(<MyForm />);

    const input: HTMLInputElement = screen.getByRole('date-input');
    fireEvent.change(input, { target: { value: testValue } });
    console.log(input.value);

    const submitButton = screen.getByRole('submit');
    fireEvent.click(submitButton);

    const error = screen.queryByRole('date-error');
    expect(error).toBe(null);
  });
  it('should give an error message if image is not selected', () => {
    render(<MyForm />);
    const submitButton = screen.getByRole('submit');
    fireEvent.click(submitButton);
    const error = screen.queryByRole('file-error');
    expect(error).toBeInTheDocument();
  });
});
