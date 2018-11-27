import React from 'react';
import App from './App';
import render from 'react-test-renderer';

describe('App component tests', () => {
  test('header snapshot', () => {
    expect(render
      .create(<App />)
      .toJSON()).toMatchSnapshot();
  });
});
