import { render, screen } from '@testing-library/react';
import { AboutMe } from './AboutMe';
import '@testing-library/jest-dom';

it('Renders AboutMe', () => {
  render(<AboutMe />);
  expect(screen.getByText('AboutMe')).toBeInTheDocument();
});
