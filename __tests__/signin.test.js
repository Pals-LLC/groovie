import React from 'react';
import { render } from '@testing-library/react';
import SignIn from '../pages/signin';

test('renders sign in message', () => {
  const { getByText } = render(<SignIn />);
  const greeting = getByText('Sign in to Groovie');
  expect(greeting).toBeInTheDocument();
});
