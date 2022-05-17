/* eslint-disable testing-library/prefer-screen-queries */
import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';
import FirstNote from './FirstNote';

test('', () => {
  const component = render(<FirstNote />);
  component.getByText('Crea tu primera nota...');
  component.getByAltText('Aliens');
  expect(component).toMatchSnapshot();
});
