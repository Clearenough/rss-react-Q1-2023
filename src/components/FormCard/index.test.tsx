import { render, screen } from '@testing-library/react';
import FormCard from '.';

describe('card', () => {
  it('should render  card', () => {
    render(
      <FormCard
        text={'hi'}
        date={'12.34.12'}
        select={'sf'}
        leaveHim={false}
        isRadioTurned={''}
        imageUrl={'hi'}
      />
    );
    const formCard = screen.getByRole('card');
    expect(formCard).toBeInTheDocument();
  });
});
