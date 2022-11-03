import { render, screen } from '@testing-library/react';
import Card from '../Card';

test('renders correct heading', () => {
  render(<Card totalTitle='missing tools'/>);
  const headingElement = screen.getByText(/missing tools/i);
  expect(headingElement).toBeInTheDocument();
});

test('renders correct card info', () => {
    render(<Card total='54'/>);
    const headingElement = screen.getByText(/54/i);
    expect(headingElement).toBeInTheDocument();
  });
