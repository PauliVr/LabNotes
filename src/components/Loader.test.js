/* eslint-disable testing-library/render-result-naming-convention */
import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { getByTestId, render } from '@testing-library/react';
import Loader from './Loader';

test('Render Loader', () => {
  const component = render(<Loader />);
  component.getByAltText('SVGLoader');
  expect(component).toMatchSnapshot();
});
