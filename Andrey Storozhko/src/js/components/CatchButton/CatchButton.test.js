import React from 'react';
import CatchButton from './CatchButton';

it('should render a CatchButton', () => {
  const component = shallow(<CatchButton />);
  expect(component).toMatchSnapshot();
});
