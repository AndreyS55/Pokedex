import React from 'react';
import NavBar from './NavBar';

it('should render a NavBar', () => {
  const wrapper = shallow(<NavBar />);
  expect(wrapper).toMatchSnapshot();
});
