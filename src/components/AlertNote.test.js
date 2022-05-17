/* eslint-disable testing-library/render-result-naming-convention */
import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';
import AlertNote from './AlertNote';

test('Render component', () => {
  const message = 'Nota registrada';
  const component = render(<AlertNote props={message} />);
  // eslint-disable-next-line testing-library/prefer-screen-queries
  component.getByAltText('IconCheck');
  expect(component).toMatchSnapshot();
});
