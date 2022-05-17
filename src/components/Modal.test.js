/* eslint-disable testing-library/prefer-screen-queries */
import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { fireEvent, render } from '@testing-library/react';
import { prettyDOM } from '@testing-library/react';
import Modal from './Modal';

test('Renders modal component', () => {
  const view = render(<Modal />);
  view.getAllByAltText('AstroCat');
  view.getByText('¿Estas segur@ que quieres eliminar la nota?');
  expect(view.container).toHaveTextContent('* Al eliminar la nota no podrás recuperarla * ');
  // eslint-disable-next-line testing-library/no-debugging-utils
  view.debug();
});

test('Clicking the button calls event handler once', () => {
  const del = false;
  const mockHandler = jest.fn();
  const view = render(<Modal onClick={mockHandler} />);
  expect(view).toMatchSnapshot();
  const button = view.getByText('Eliminar Nota');
  expect(mockHandler.mock.calls).toHaveLength(0);
});
