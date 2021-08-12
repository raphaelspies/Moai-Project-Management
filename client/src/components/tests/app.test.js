/**
 * @jest-environment jsdom
 */

//you're testing in react, so you need to include react
import React from 'react'
import ReactDOM from 'react-dom'

//dependencies for god knows why
import "core-js/stable";
import "regenerator-runtime/runtime";

//React-Testing-Library supplies the render method and fireEvent (for instance, clicking a button)
import { render, fireEvent, screen } from '@testing-library/react'

//the main component to test: App
import App from '../app'

//for Redux
import store from '../../app/store';
import { Provider } from 'react-redux';


test('2 + 2 = 4', () => {
  expect(2 + 2).toBe(4);
});

test('object assignment', () => {
  const data = { one: 1};
  data['two'] = 2;
  expect(data).toEqual({one: 1, two: 2});
});

test('render <App />', async () => {
  await render(<Provider store={store}>
    <App/>
  </Provider>)
  expect(screen.getByText('Moai')).toBeTrue();
})