import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../App';

describe('App', () => {
  test('Initialize the app testsuit', () => {
    render(<App />);
    const linkElement = screen.getByTitle('App');
    expect(linkElement).toBeInTheDocument();
  });
});
