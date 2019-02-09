import React from 'react';
import Container from './Container';

it('should render a Container', () => {
  const wrapper = shallow(<Container />);
  expect(wrapper).toMatchSnapshot();
});
