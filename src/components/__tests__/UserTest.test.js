import { render, screen } from '@testing-library/react';
import User from '../User';

test('renders correct user email', () => {
  render(<User email='alvin2k99@gmail.com'/>);
  const spanElement = screen.getByText(/alvin2k99@gmail.com/i);
  expect(spanElement).toBeInTheDocument();
});

test('renders correct user contributions', () => {
    render(<User contributions='102'/>);
    const spanElement = screen.getByText(/102/i);
    expect(spanElement).toBeInTheDocument();
  });