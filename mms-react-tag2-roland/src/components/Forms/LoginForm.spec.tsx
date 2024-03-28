import { render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import { act } from 'react-dom/test-utils';
import { LoginForm } from './LoginForm';

it('Renders LoginForm', async () => {
  render(<LoginForm />);
  
  Object.defineProperty(window, "localStorage", {
    value: {
      getItem: jest.fn(() => null),
      setItem: jest.fn(() => null),
    },
    writable: true,
  });
  
  expect(screen.getByText('Login form')).toBeInTheDocument();
  
  const input = await screen.findByRole("textbox", { name: /Username/i });
  await userEvent.type(input, "Donald")

  await act(async () => {
    (await screen.findByRole("button", { name: /Login/i })).click();
  });
  
  await waitFor(() => expect(screen.getByTestId('result')).toHaveTextContent("Donald"));
  await waitFor(() => expect(input).toHaveValue(""));

  // check that localstorage was set
  expect(window.localStorage.setItem).toHaveBeenCalledWith("user", "{\"username\":\"Donald\",\"password\":\"\"}");
});
