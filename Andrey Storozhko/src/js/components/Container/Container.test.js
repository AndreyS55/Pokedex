import React from 'react';
import Container from './Container';

it('should render a Container', () => {
  const component = shallow(<Container />);
  expect(component).toMatchSnapshot();
});
