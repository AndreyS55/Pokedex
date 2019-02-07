import React from 'react';
import NavBar from './NavBar';

it('should render a NavBar', () => {
  const component = shallow(<NavBar />);
  expect(component).toMatchSnapshot();
});
