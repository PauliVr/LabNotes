import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { fireEvent, render } from '@testing-library/react';
import ButtonDelete from './ButtonDelete';

test('Render the delete button', () => {
  const id = 'gqZBfmImBCP8VcZKUID3';
  // const validate = true;
  // const deletes = (validate, id) => (validate, id);
  // const mockHandler = jest.fn();
  const view = render(<ButtonDelete delete={id} />);
  expect(view).toMatchSnapshot();
  // const component = render(<ButtonDelete props={deletes} onClick={mockHandler} />);
  // const button = component.getByText('Eliminar');
  // fireEvent.click(button);
  // expect(mockHandler.mock.calls).toHaveLength(0);
});
