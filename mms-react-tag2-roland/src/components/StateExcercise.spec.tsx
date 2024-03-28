import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { StateExcercise } from './StateExcercise';
import { act } from 'react-dom/test-utils';

it('Renders StateExcercise', () => {
  render(<StateExcercise />);

  expect(screen.getByTestId('Number')).toHaveTextContent("0");
  act(() => {
    /* fire events that update state */
    screen.getByRole("button").click();
  });
  expect(screen.getByTestId('Number')).toHaveTextContent("1");
});
