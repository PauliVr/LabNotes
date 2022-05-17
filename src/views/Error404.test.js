import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';
import Error404 from './Error404';

test('Render Component', () => {
  const view = render(<Error404 />);
  view.getByAltText('404Error');
  expect(view).toMatchSnapshot();
});
