import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { act } from 'react-dom/test-utils';
import { ContextExcercise } from '.';

it('Renders ContextExcercise', () => {
  render(<ContextExcercise />);
  
  expect(screen.getByTestId('context-counter')).toHaveTextContent("0");
  act(() => {
    /* fire events that update state */
    screen.getByRole("button").click();
  });
  expect(screen.getByTestId('context-counter')).toHaveTextContent("1");
});
