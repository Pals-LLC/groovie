import React from 'react';
import { render } from '@testing-library/react';
import Home from '../pages';

test('renders sign in button in Home page', () => {
  const { getByText } = render(<Home />);
  const signInButton = getByText('Sign in');
  expect(signInButton).toBeInTheDocument();
});
